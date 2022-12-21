const fs =require ('fs')
fs.writeFile('newfile.txt', 'Coucou toi!', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });