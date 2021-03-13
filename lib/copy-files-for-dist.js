const fs = require("fs");

fs.copyFile("./lib/package.json", "./dist-lib/package.json", () => {});
fs.copyFile("./lib/README.md", "./dist-lib/README.md", () => {});
fs.copyFile("./lib/LICENSE", "./dist-lib/LICENSE", () => {});
