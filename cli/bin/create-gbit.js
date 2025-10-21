#!/usr/bin/env node
const { createRootPackageJson } = require('../lib/package');

const { program } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs-extra');
const path = require('path');
const { generateProject } = require('../lib/generator');
const { displayWelcome } = require('../lib/ui');

program
  .version('1.0.0')
  .argument('[project-name]', 'Nome do projeto')
  .description('🚀 Create Gbit App - Crie aplicações completas prontas para produção')
  .action(async (projectName) => {
    displayWelcome();

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: '1️⃣  Nome do projeto:',
        default: projectName || 'my-gbit-app',
        validate: (input) => {
          if (/^[a-z0-9-_]+$/.test(input)) return true;
          return 'Nome do projeto deve conter apenas letras minúsculas, números, hífens e underscores';
        }
      },
      {
        type: 'confirm',
        name: 'includeBackend',
        message: '2️⃣  Incluir backend?',
        default: true
      },
      {
        type: 'list',
        name: 'backendLanguage',
        message: '3️⃣  Linguagem do backend?',
        choices: ['Node.js', 'Python'],
        when: (answers) => answers.includeBackend
      },
      {
        type: 'list',
        name: 'backendFramework',
        message: '4️⃣  Framework backend?',
        choices: (answers) => {
          if (answers.backendLanguage === 'Node.js') {
            return ['Express', 'NestJS'];
          }
          return ['Flask', 'FastAPI'];
        },
        when: (answers) => answers.includeBackend
      },
      {
        type: 'confirm',
        name: 'includeWebsockets',
        message: '5️⃣  Incluir WebSockets?',
        default: false,
        when: (answers) => answers.includeBackend
      },
      {
        type: 'list',
        name: 'database',
        message: '6️⃣  Base de dados?',
        choices: ['SQLite', 'PostgreSQL', 'MongoDB', 'Nenhum'],
        default: 'PostgreSQL',
        when: (answers) => answers.includeBackend
      },
      {
        type: 'confirm',
        name: 'includeFrontend',
        message: '7️⃣  Incluir frontend?',
        default: true
      },
      {
        type: 'list',
        name: 'frontendLanguage',
        message: '8️⃣  Linguagem do frontend?',
        choices: ['JavaScript', 'TypeScript'],
        default: 'TypeScript',
        when: (answers) => answers.includeFrontend
      },
      {
        type: 'list',
        name: 'frontendFramework',
        message: '9️⃣  Framework frontend?',
        choices: ['React', 'Next.js', 'Vite'],
        default: 'Vite',
        when: (answers) => answers.includeFrontend
      },
      {
        type: 'confirm',
        name: 'includeContracts',
        message: '🔟 Incluir smart contracts?',
        default: false
      },
      {
        type: 'list',
        name: 'contractLanguage',
        message: '1️⃣1️⃣ Linguagem dos smart contracts?',
        choices: ['Solidity', 'Vyper'],
        default: 'Solidity',
        when: (answers) => answers.includeContracts
      },
      {
        type: 'confirm',
        name: 'autoDeployScripts',
        message: '1️⃣2️⃣ Gerar scripts de deploy e ABI automaticamente?',
        default: true,
        when: (answers) => answers.includeContracts
      },
      {
        type: 'list',
        name: 'theme',
        message: '1️⃣3️⃣ Tema inicial do frontend?',
        choices: ['Gbit Dark', 'Gbit Light', 'Minimal'],
        default: 'Gbit Dark',
        when: (answers) => answers.includeFrontend
      },
      {
        type: 'confirm',
        name: 'includeDocker',
        message: '1️⃣4️⃣ Adicionar Docker e Docker Compose?',
        default: true
      },
      {
        type: 'confirm',
        name: 'includeGitConfig',
        message: '1️⃣5️⃣ Incluir configuração Git + Vercel + README automático?',
        default: true
      },
      {
        type: 'list',
        name: 'projectType',
        message: '1️⃣6️⃣ Criar estrutura completa ou parcial?',
        choices: [
          { name: 'Projeto Completo (Full Stack)', value: 'full' },
          { name: 'Somente Backend', value: 'backend' },
          { name: 'Somente Frontend', value: 'frontend' },
          { name: 'Somente Smart Contracts', value: 'contracts' }
        ],
        default: 'full'
      }
    ]);

    console.log('\n');
    const spinner = ora('Gerando estrutura do projeto...').start();

    try {
      await generateProject(answers);
      spinner.succeed(chalk.green('✅ Projeto criado com sucesso!'));
      
      console.log('\n' + chalk.cyan.bold('📦 Próximos passos:'));
      console.log(chalk.white(`  cd ${answers.projectName}`));
      
      if (answers.includeBackend) {
        console.log(chalk.white(`  cd backend && npm install`));
      }
      
      if (answers.includeFrontend) {
        console.log(chalk.white(`  cd frontend && npm install`));
      }
      
      console.log(chalk.white(`  npm run dev`));
      console.log('\n' + chalk.green('🚀 Boa sorte com seu projeto Gbit!'));
    } catch (error) {
      spinner.fail(chalk.red('❌ Erro ao criar projeto'));
      console.error(error);
      process.exit(1);
    }
  });

program.parse(process.argv);
