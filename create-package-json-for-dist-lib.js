const fs = require("fs");

// const packageJsonContent = `{
//     "name": "ngx-console-life-hooks",
//     "version": "0.0.1",
//     "main": "./index.js",
//     "description": "Class decorator that automatically console logs lifecycle hooks events"
// }`;

// fs.writeFile("./dist-lib/package.json", packageJsonContent, () => {});

fs.copyFile("./lib/package.json", "./dist-lib/package.json", () => {});
fs.copyFile("./lib/README.md", "./dist-lib/README.md", () => {});
