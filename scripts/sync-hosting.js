const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..");
const generatedPath = path.join(repoRoot, "data", "projects.generated.json");

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function asYear(value) {
  if (!value) {
    return String(new Date().getFullYear());
  }

  return String(new Date(value).getUTCFullYear());
}

function dedupeStack(parts) {
  return [...new Set(parts.filter(Boolean))];
}

async function fetchJson(url, token, label) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${label} request failed with ${response.status}: ${body}`);
  }

  return response.json();
}

async function fetchAllVercelProjects(token) {
  const projects = [];
  let next = null;

  do {
    const url = new URL("https://api.vercel.com/v10/projects");
    if (next) {
      url.searchParams.set("until", next);
      url.searchParams.set("limit", "100");
    }

    const data = await fetchJson(url, token, "Vercel");
    const batch = Array.isArray(data.projects) ? data.projects : [];
    projects.push(...batch);
    next = data.pagination?.next || null;
  } while (next);

  return projects.map((project) => ({
    id: slugify(project.name),
    name: project.name,
    platform: "vercel",
    url: project.latestDomains?.[0]
      ? `https://${project.latestDomains[0]}`
      : project.link?.production || `https://${project.name}.vercel.app`,
    year: asYear(project.createdAt),
    framework: project.framework || null,
    repo: project.link?.repo || null,
    createdAt: project.createdAt || null,
    updatedAt: project.updatedAt || null,
    stack: dedupeStack([project.framework, "Vercel"]),
  }));
}

async function fetchAllNetlifySites(token) {
  const allSites = [];
  let page = 1;

  while (true) {
    const url = new URL("https://api.netlify.com/api/v1/sites");
    url.searchParams.set("page", String(page));
    url.searchParams.set("per_page", "100");

    const sites = await fetchJson(url, token, "Netlify");
    if (!Array.isArray(sites) || sites.length === 0) {
      break;
    }

    allSites.push(...sites);
    if (sites.length < 100) {
      break;
    }

    page += 1;
  }

  return allSites.map((site) => ({
    id: slugify(site.name),
    name: site.name,
    platform: "netlify",
    url: site.ssl_url || site.primary_domain || site.url,
    year: asYear(site.created_at),
    framework: site.build_settings?.cmd ? "Static Site" : null,
    repo: site.build_settings?.repo_url || null,
    createdAt: site.created_at || null,
    updatedAt: site.updated_at || null,
    stack: dedupeStack(["Netlify"]),
  }));
}

function mergeGeneratedProjects(existingProjects, syncedProjects, syncedPlatforms) {
  const existingMap = new Map(existingProjects.map((project) => [project.id, project]));
  const untouchedProjects = existingProjects.filter(
    (project) => !syncedPlatforms.has(project.platform)
  );

  const merged = syncedProjects.map((project) => ({
    ...existingMap.get(project.id),
    ...project,
  }));

  merged.push(...untouchedProjects);

  merged.sort((left, right) => {
    const rightDate = right.updatedAt || right.createdAt || "";
    const leftDate = left.updatedAt || left.createdAt || "";
    return rightDate.localeCompare(leftDate);
  });

  return merged;
}

async function main() {
  const vercelToken = process.env.VERCEL_TOKEN;
  const netlifyToken = process.env.NETLIFY_TOKEN;

  if (!vercelToken && !netlifyToken) {
    throw new Error("Set VERCEL_TOKEN and/or NETLIFY_TOKEN before running sync-hosting.js.");
  }

  const existingProjects = readJson(generatedPath);
  const syncedProjects = [];
  const syncedPlatforms = new Set();

  if (vercelToken) {
    syncedPlatforms.add("vercel");
    syncedProjects.push(...(await fetchAllVercelProjects(vercelToken)));
  }

  if (netlifyToken) {
    syncedPlatforms.add("netlify");
    syncedProjects.push(...(await fetchAllNetlifySites(netlifyToken)));
  }

  const merged = mergeGeneratedProjects(existingProjects, syncedProjects, syncedPlatforms);
  writeJson(generatedPath, merged);

  const counts = merged.reduce(
    (accumulator, project) => {
      accumulator.total += 1;
      accumulator[project.platform] += 1;
      return accumulator;
    },
    { total: 0, vercel: 0, netlify: 0 }
  );

  console.log(`Synced ${counts.total} projects (${counts.vercel} Vercel, ${counts.netlify} Netlify).`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
