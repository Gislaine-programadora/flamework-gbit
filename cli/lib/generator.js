const fs = require('fs-extra');
const path = require('path');
const { renderTemplate } = require('./templates');

async function generateProject(answers) {
  const projectPath = path.join(process.cwd(), answers.projectName);

  // Criar pasta principal do projeto
  await fs.ensureDir(projectPath);

  // Gerar estrutura baseada no tipo de projeto
  if (answers.projectType === 'full' || answers.projectType === 'backend') {
    if (answers.includeBackend) {
      await generateBackend(projectPath, answers);
    }
  }

  if (answers.projectType === 'full' || answers.projectType === 'frontend') {
    if (answers.includeFrontend) {
      await generateFrontend(projectPath, answers);
    }
  }

  if (answers.projectType === 'full' || answers.projectType === 'contracts') {
    if (answers.includeContracts) {
      await generateContracts(projectPath, answers);
    }
  }

  // Gerar estrutura de banco de dados
  if (answers.database && answers.database !== 'Nenhum') {
    await generateDatabase(projectPath, answers);
  }

  // Gerar Docker
  if (answers.includeDocker) {
    await generateDocker(projectPath, answers);
  }

  // Gerar arquivos de configuração Git
  if (answers.includeGitConfig) {
    await generateGitConfig(projectPath, answers);
  }

  // Gerar README principal
  await generateMainReadme(projectPath, answers);
}

async function generateBackend(projectPath, answers) {
  const backendPath = path.join(projectPath, 'backend');
  await fs.ensureDir(backendPath);

  const structure = [
    'src/routes',
    'src/controllers',
    'src/models',
    'src/services',
    'src/utils',
    'config'
  ];

  for (const dir of structure) {
    await fs.ensureDir(path.join(backendPath, dir));
  }

  // Gerar arquivos baseados no framework
  if (answers.backendLanguage === 'Node.js') {
    await renderTemplate('backend/nodejs', backendPath, answers);
  } else {
    await renderTemplate('backend/python', backendPath, answers);
  }

  // WebSockets
  if (answers.includeWebsockets) {
    await renderTemplate('backend/websockets', path.join(backendPath, 'src'), answers);
  }
}

async function generateFrontend(projectPath, answers) {
  const frontendPath = path.join(projectPath, 'frontend');
  await fs.ensureDir(frontendPath);

  const structure = [
    'public',
    'src/components',
    'src/pages',
    'src/services',
    'src/styles',
    'src/assets'
  ];

  for (const dir of structure) {
    await fs.ensureDir(path.join(frontendPath, dir));
  }

  // Gerar arquivos baseados no framework
  await renderTemplate(`frontend/${answers.frontendFramework.toLowerCase()}`, frontendPath, answers);

  // Aplicar tema
  await renderTemplate(`themes/${answers.theme.toLowerCase().replace(' ', '-')}`, frontendPath, answers);
}

async function generateContracts(projectPath, answers) {
  const contractsPath = path.join(projectPath, 'contracts');
  await fs.ensureDir(contractsPath);

  const structure = [
    'scripts',
    'build/abi',
    'test'
  ];

  for (const dir of structure) {
    await fs.ensureDir(path.join(contractsPath, dir));
  }

  await renderTemplate('contracts', contractsPath, answers);

  if (answers.autoDeployScripts) {
    await renderTemplate('contracts/deploy-scripts', path.join(contractsPath, 'scripts'), answers);
  }
}

async function generateDatabase(projectPath, answers) {
  const dbPath = path.join(projectPath, 'database');
  await fs.ensureDir(dbPath);

  const structure = [
    'migrations',
    'seeds'
  ];

  for (const dir of structure) {
    await fs.ensureDir(path.join(dbPath, dir));
  }

  await renderTemplate(`database/${answers.database.toLowerCase()}`, dbPath, answers);
}

async function generateDocker(projectPath, answers) {
  const dockerPath = path.join(projectPath, 'docker');
  await fs.ensureDir(dockerPath);
  await renderTemplate('docker', dockerPath, answers);
  
  // Docker Compose na raiz
  await renderTemplate('docker/compose', projectPath, answers);
}

async function generateGitConfig(projectPath, answers) {
  await renderTemplate('git', projectPath, answers);
  await renderTemplate('vercel', projectPath, answers);
}

async function generateMainReadme(projectPath, answers) {
  await renderTemplate('readme', projectPath, answers);
}

module.exports = { generateProject };
