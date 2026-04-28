const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..");
const metaPath = path.join(repoRoot, "data", "projects-meta.json");
const generatedPath = path.join(repoRoot, "data", "projects.generated.json");
const outputPath = path.join(repoRoot, "projects.js");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function defaultTitle(id) {
  return id
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function fallbackDescriptions(platformName) {
  return {
    shortDescription: {
      vi: `Project moi duoc dong bo tu ${platformName}. Ban co the bo sung noi dung card trong data/projects-meta.json.`,
      en: `A newly synced ${platformName} project. You can enrich this card in data/projects-meta.json.`,
    },
    goal: {
      vi: "Dong bo tu dong project moi tu nen tang hosting va bo sung metadata sau.",
      en: "Automatically sync new hosting projects first, then add richer metadata afterward.",
    },
    highlights: {
      vi: ["dong bo tu dong", platformName, "can bo sung metadata"],
      en: ["automatic sync", platformName, "metadata pending"],
    },
  };
}

function mergeProject(generatedProject, metaProject) {
  const platformName = generatedProject.platform === "vercel" ? "Vercel" : "Netlify";
  const fallback = fallbackDescriptions(platformName);
  const title = metaProject?.title || {
    vi: defaultTitle(generatedProject.id),
    en: defaultTitle(generatedProject.id),
  };

  const stack = metaProject?.stack?.length
    ? metaProject.stack
    : [generatedProject.framework, platformName].filter(Boolean);

  return {
    id: generatedProject.id,
    title,
    audience: metaProject?.audience || "personal",
    year: generatedProject.year || String(new Date().getFullYear()),
    url: generatedProject.url,
    shortDescription: metaProject?.shortDescription || fallback.shortDescription,
    goal: metaProject?.goal || fallback.goal,
    stack,
    highlights: metaProject?.highlights || fallback.highlights,
  };
}

const metaProjects = readJson(metaPath);
const generatedProjects = readJson(generatedPath);
const metaMap = new Map(metaProjects.map((project) => [project.id, project]));
const mergedProjects = generatedProjects.map((project) => mergeProject(project, metaMap.get(project.id)));

const output = `const projects = ${JSON.stringify(mergedProjects, null, 2)};\n`;
fs.writeFileSync(outputPath, output, "utf8");
