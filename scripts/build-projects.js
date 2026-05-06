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
      vi: `Dự án mới được đồng bộ từ ${platformName}. Bạn có thể bổ sung nội dung thẻ trong data/projects-meta.json.`,
      en: `A newly synced ${platformName} project. You can enrich this card in data/projects-meta.json.`,
    },
    goal: {
      vi: "Đồng bộ tự động dự án mới từ nhà cung cấp hosting và bổ sung metadata sau.",
      en: "Automatically sync new hosting projects first, then add richer metadata afterward.",
    },
    highlights: {
      vi: ["Đồng bộ tự động", platformName, "Bổ sung metadata"],
      en: ["automatic sync", platformName, "metadata pending"],
    },
    problem: {
      vi: "Dự án mới đã được phát hiện từ nhà cung cấp hosting nhưng chưa có case study riêng.",
      en: "This newly synced hosting project does not have a dedicated case study yet.",
    },
    outcome: {
      vi: "Được đưa vào hub để theo dõi và bổ sung nội dung sau.",
      en: "Added to the hub for tracking and later enrichment.",
    },
    lesson: {
      vi: "Giữ workflow đồng bộ tự động giữa nhà cung cấp hosting và portfolio.",
      en: "Keep an automated sync workflow between hosting and the portfolio.",
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

  const merged = {
    id: generatedProject.id,
    title,
    audience: metaProject?.audience || "personal",
    year: generatedProject.year || String(new Date().getFullYear()),
    url: generatedProject.url,
    shortDescription: metaProject?.shortDescription || fallback.shortDescription,
    goal: metaProject?.goal || fallback.goal,
    stack,
    highlights: metaProject?.highlights || fallback.highlights,
    status: metaProject?.status || (metaProject ? "live" : "needs-metadata"),
    platform: generatedProject.platform,
    sourceUrl: metaProject?.sourceUrl || generatedProject.repo || null,
    problem: metaProject?.problem || fallback.problem,
    outcome: metaProject?.outcome || fallback.outcome,
    lesson: metaProject?.lesson || fallback.lesson,
    featuredSkill: metaProject?.featuredSkill || stack[0] || platformName,
    thumbnailTone: metaProject?.thumbnailTone || "warm",
  };

  if (metaProject?.dedicatedPage === true) {
    merged.dedicatedPage = true;
  }

  if (typeof metaProject?.loveSince === "string" && metaProject.loveSince.trim()) {
    merged.loveSince = metaProject.loveSince.trim();
  }

  return merged;
}

const metaProjects = readJson(metaPath);
const generatedProjects = readJson(generatedPath);
const metaMap = new Map(metaProjects.map((project) => [project.id, project]));
const mergedProjects = generatedProjects.map((project) => mergeProject(project, metaMap.get(project.id)));

const output = `const projects = ${JSON.stringify(mergedProjects, null, 2)};\n`;
fs.writeFileSync(outputPath, output, "utf8");
