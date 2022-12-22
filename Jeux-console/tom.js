//importation des modules
import { createInterface } from 'readline';
import { appendFile } from 'fs';
import chalk, { Chalk } from 'chalk';
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