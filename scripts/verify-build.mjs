import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";

const basePath = process.env.VITE_BASE_PATH ?? "/portfolio/";

const required = [
  "dist/index.html",
  "dist/resume/index.html",
  "dist/images/myProfile.jpg",
  "dist/robots.txt",
  "dist/sitemap.xml",
];

await Promise.all(required.map((path) => access(path, constants.R_OK)));

for (const path of ["dist/index.html", "dist/resume/index.html"]) {
  const html = await readFile(path, "utf8");
  if (!html.includes(`${basePath}assets/`)) {
    throw new Error(`${path} is missing base-path-aware assets`);
  }
  if (html.includes("%PUBLIC_URL%")) {
    throw new Error(`${path} contains unresolved Create React App placeholders`);
  }
}

console.log("Verified portfolio and résumé build outputs.");
