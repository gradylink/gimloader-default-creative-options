import fs from "fs";

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

/** @type {import('@gimloader/build').Config} */
export default {
  input: "./src/index.ts",
  name: "Default Creative Options",
  description: "Lets you set default options for when you open a creative map.",
  author: "grady.link",
  version: pkg.version,
  gamemodes: ["creative"],
};
