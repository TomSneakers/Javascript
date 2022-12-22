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
//fonction du debut de la partie
function launchGame(name) {
  let bet;
  //demande d'entrée pile ou face au joeur 
  rl.question(chalk.greenBright('Pile ou face ? '), answer => {
    if (answer == "pile") bet = 0;
    if (answer == "face") bet = 1;
    //Si l'utilisateur entre une autre chaine de caractère que "pile" ou "face" alors un message d'erreur s'affiche et il perd automatiquement
    else console.log((chalk.blue)`l'entrer n'est pas correcte, veuillez réessayer`)
    const result = getResult(bet);

    savePartie(name, answer, result);
    exitOrReplay();
  });
}
//fonction pour donne le resultat
function getResult(bet) {
  //variable avec fonction qui permet de determiner un chiffre aléatoire entre 0 et 1
  const pileOuFace = Math.round(Math.random());
  //Si la variable pilOuFace déterminer aleatoirement à la ligne 40 contient la même chaine de caractère que bet alors il retourne winner sinon perdu
  if (pileOuFace == bet) {
    console.log(`
  ╔═══╦╦════════╗
  ║╔╦╦╬╬═╦═╦═╦═╗║
  ║║║║║║║║║║╩╣╠╝║
  ║╚══╩╩╩╩╩╩═╩╝ ║
  ╚═════════════╝
    `);
    return "win";
  }
  else {
    console.log(`
    ╔═══════╦╦═══╗
    ║╔═╦═╦═╦╝╠╗╔╗║
    ║║║║╩╣╠╣║║╚╝║║
    ║║╔╩═╩╝╚═╩══╝║
    ╚╩╩══════════╝`)
    return "loose";
  }
}