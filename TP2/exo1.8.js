const path = require('node:path');

// nom fichier à partir d'un chemin complet

const fileName = path.basename('/Users/user/b1-rendu-2022/cours/droit-dossier.txt');

console.log(fileName);



// Donne l'extension du fichier a l'aide de son chemin
const fileExtension = path.extname('/Users/user/Desktop/RPI/NODE JS/exo/TP2/exo1.8.js');

console.log(fileExtension);



//donne le nom du repertoir du fichier
const dirName = path.dirname('/Users/user/Desktop/RPI/NODE JS/exo/TP2/exo1.8.js');

console.log(dirName);


// donne un chemin en joignant différents repertoir et fichier
const fullPath = path.join('/Users/user', 'documents', 'file.txt');

console.log(fullPath);