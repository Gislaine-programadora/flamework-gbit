const fs = require('fs');
const path = require('path');

function createRootPackageJson(projectName, targetDir) {
  const packageJson = {
    name: projectName,
    version: "1.0.0",
    description: "Projeto criado com Gbit Framework 🚀",
    main: "index.js",
    scripts: {
      build: "gbit-build",
      dev: "cd frontend && npm run dev",
      lint: "eslint .",
      format: "prettier --write ."
    },
    devDependencies: {
      "gbit-build": "^1.0.0"
    },
    keywords: [],
    author: "Gbit Team",
    license: "MIT"
  };

  fs.writeFileSync(
    path.join(targetDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
}

module.exports = { createRootPackageJson };