// import du module fs
const fs = require("fs");
  
let directory_name = "./";
  
// fonction permettant de donner les noms des fichier du repertoire exo2

let filenames = fs.readdirSync(directory_name);
  
console.log("\n Nom des fichier dans le répertoire 'exo2':");
filenames.forEach((file) => {
    console.log("File:", file);
});
