const fs = require('fs-extra');
const path = require('path');
const Handlebars = require('handlebars');

// Register Handlebars helpers
Handlebars.registerHelper('eq', function(a, b) {
  return a === b;
});

Handlebars.registerHelper('ne', function(a, b) {
  return a !== b;
});

Handlebars.registerHelper('and', function(a, b) {
  return a && b;
});

Handlebars.registerHelper('or', function(a, b) {
  return a || b;
});

async function renderTemplate(templateName, outputPath, data) {
  const templatesDir = path.join(__dirname, '../templates', templateName);
  
  if (!await fs.pathExists(templatesDir)) {
    return;
  }

  const files = await fs.readdir(templatesDir, { withFileTypes: true });

  for (const file of files) {
    const sourcePath = path.join(templatesDir, file.name);
    const destPath = path.join(outputPath, file.name.replace('.hbs', ''));

    if (file.isDirectory()) {
      await fs.ensureDir(destPath);
      await renderTemplate(path.join(templateName, file.name), destPath, data);
    } else {
      const content = await fs.readFile(sourcePath, 'utf-8');
      const template = Handlebars.compile(content);
      const rendered = template(data);
      await fs.writeFile(destPath, rendered);
    }
  }
}

module.exports = { renderTemplate };
