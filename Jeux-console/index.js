//importation des modules
import { createInterface } from 'readline';
import { appendFile } from 'fs';
import chalk from 'chalk';
//création de la variable pour les entrées
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});
//cosole.log pour un "bienvenue"
console.log (`
╔╦╦╦╦═══════════════╗
║║╚╬╬═╦═╦╦╦═╦═╦╗╔╦═╗║
║║║║║╩╣║║║║╩╣║║╚╝║╩╣║
║╚═╩╩═╩╩╩═╩═╩╩╩══╩═╝║
╚═══════════════════╝`)

//premiere fonction du jeu
function jeu() {
  //demande d'entrer le nom du joueur
  rl.question(chalk.greenBright("Quel est votre nom ?"), answer => {
    launchGame(answer);
  })
}