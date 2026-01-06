// scripts/gen-docs.mjs
import fs from "fs/promises";
import path from "path";

const DOCS_DIR = path.resolve("docs");
const OUT_SIDEBARS = path.resolve("sidebars.js");
const OUT_LINKS = path.resolve("generated.links.json");

const ROOT_GROUPS = ["cars", "scripts"]; // docs/cars, docs/scripts
const isMarkdown = (p) => p.endsWith(".md") || p.endsWith(".mdx");

async function findDirCaseInsensitive(parentDir, wantedName) {
  const entries = await fs.readdir(parentDir, { withFileTypes: true });
  const found = entries.find(
    (e) => e.isDirectory() && e.name.toLowerCase() === wantedName.toLowerCase()
  );
  return found ? path.join(parentDir, found.name) : null;
}

// docs/<...>.md -> <...> (doc id)  (ZATEN VAR SENDEN)

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(full));
    else if (e.isFile() && isMarkdown(full)) files.push(full);
  }
  return files;
}

// docs/<...>.md -> <...> (doc id)
function toDocId(absPath) {
  const rel = path.relative(DOCS_DIR, absPath).replace(/\\/g, "/");
  return rel.replace(/\.(md|mdx)$/, "");
}

// "posdevice" -> "POSDEVICE", "bank-system" -> "BANK SYSTEM"
function folderLabel(name) {
  return name.replace(/[-_]/g, " ").toUpperCase();
}

// read frontmatter sidebar_position (optional)
function parseSidebarPosition(mdContent) {
  const m = mdContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n/m);
  if (!m) return null;
  const fm = m[1];
  const pos = fm.match(/sidebar_position:\s*([0-9]+)/);
  return pos ? Number(pos[1]) : null;
}

async function buildSidebarTree(docFiles) {
  const rootItems = [];
  const catMap = new Map(); // folder path -> category object

  function getOrCreateCategory(folderPathParts) {
    let currentPath = "";
    let parentItems = rootItems;

    for (const part of folderPathParts) {
      currentPath = currentPath ? `${currentPath}/${part}` : part;

      if (!catMap.has(currentPath)) {
        const cat = {
          type: "category",
          label: part,
          collapsed: true, // ✅ default closed
          items: [],
        };
        catMap.set(currentPath, cat);
        parentItems.push(cat);
      }

      const cat = catMap.get(currentPath);
      parentItems = cat.items;
    }

    return parentItems;
  }

  for (const fileAbs of docFiles) {
    const docId = toDocId(fileAbs);
    const parts = docId.split("/");
    const fileName = parts.pop();
    const folderParts = parts;

    const parentItems = getOrCreateCategory(folderParts);

    let position = null;
    try {
      const content = await fs.readFile(fileAbs, "utf8");
      position = parseSidebarPosition(content);
    } catch {}

    parentItems.push({
      type: "doc",
      id: folderParts.length ? `${folderParts.join("/")}/${fileName}` : fileName,
      ...(position != null ? { __pos: position } : {}),
    });
  }

  // prettify category labels (top level = CARS / SCRIPTS)
  function prettify(items, prefix = []) {
    for (const it of items) {
      if (it.type === "category") {
        const full = [...prefix, it.label];
        if (full.length === 1) it.label = folderLabel(it.label);
        else it.label = it.label.replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        prettify(it.items, full);
      }
    }
  }

  function sortItems(items) {
    for (const it of items) {
      if (it.type === "category") sortItems(it.items);
    }

    items.sort((a, b) => {
      if (a.type === "category" && b.type !== "category") return -1;
      if (a.type !== "category" && b.type === "category") return 1;

      const ap = a.__pos ?? 999999;
      const bp = b.__pos ?? 999999;
      if (ap !== bp) return ap - bp;

      const an = (a.label ?? a.id).toString().toLowerCase();
      const bn = (b.label ?? b.id).toString().toLowerCase();
      return an.localeCompare(bn);
    });

    for (const it of items) if (it.__pos != null) delete it.__pos;
  }

  prettify(rootItems);
  sortItems(rootItems);
  return rootItems;
}

// ✅ group footer/navbar links = product folders under docs/<group>/
// rule: each product -> pick best landing doc automatically (overview > main > index > first found)
async function buildGroupLinks(groupName) {
  const groupDir = await findDirCaseInsensitive(DOCS_DIR, groupName);
  if (!groupDir) return [];

  const all = await walk(groupDir);

  // product = first folder under the group folder
  // (scripts/posdevice/... -> product: posdevice)
  const bestByProduct = new Map();

  for (const abs of all) {
    const docId = toDocId(abs); // örn: "SCRIPTS/posdevice/config/overview"
    const parts = docId.split("/");

    // group = first segment (case-insensitive)
    if (!parts[0] || parts[0].toLowerCase() !== groupName.toLowerCase()) continue;

    const product = parts[1];
    const page = parts[parts.length - 1];
    if (!product) continue;

    const score =
      page === "overview" ? 0 :
      page === "main" ? 1 :
      page === "index" ? 2 :
      page === "readme" ? 3 :
      10;

    const prev = bestByProduct.get(product);
    if (!prev || score < prev.score) bestByProduct.set(product, { docId, score });
  }

  return [...bestByProduct.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([product, v]) => ({
      labelKey: `nav.${groupName}.${product}`,  // örn: nav.cars.overview, nav.scripts.posdevice
      label: folderLabel(product),             // fallback (EN gibi)
      to: `/${v.docId}`, // routeBasePath: '/'
    }));
}

function writeSidebars(sidebarItems) {
  const sidebarsObj = { tutorialSidebar: sidebarItems };

  const out = `// AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
// Generated by scripts/gen-docs.mjs

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = ${JSON.stringify(sidebarsObj, null, 2)};

module.exports = sidebars;
`;
  return fs.writeFile(OUT_SIDEBARS, out, "utf8");
}

async function main() {
  if (!(await exists(DOCS_DIR))) {
    console.error(`[gen-docs] docs/ folder not found at: ${DOCS_DIR}`);
    process.exit(1);
  }

  // sidebars = all docs
  const allDocs = await walk(DOCS_DIR);
  const sidebarItems = await buildSidebarTree(allDocs);
  await writeSidebars(sidebarItems);

  // links for navbar/footer
  const cars = await buildGroupLinks("cars");
  const scripts = await buildGroupLinks("scripts");

  const generated = { cars, scripts };
  await fs.writeFile(OUT_LINKS, JSON.stringify(generated, null, 2), "utf8");

  console.log(`[gen-docs] sidebars.js + generated.links.json written. Docs found: ${allDocs.length}`);
  console.log(`[gen-docs] cars: ${cars.length}, scripts: ${scripts.length}`);
}

main().catch((e) => {
  console.error("[gen-docs] Failed:", e);
  process.exit(1);
});
