const chalk = require('chalk');
const figlet = require('figlet');

function displayWelcome() {
  console.log('\n');
  console.log(chalk.red.bold(figlet.textSync('GBIT', { horizontalLayout: 'full' })));
  console.log(chalk.cyan.bold('🚀 Bem-vindo ao Create Gbit App (Gbit Framework)'));
  console.log(chalk.white('Crie aplicações completas — Backend, Frontend e Smart Contracts — prontas para produção.\n'));
}

module.exports = { displayWelcome };
