const fs = require('fs')
fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('readFile: premier callback: ', data)

    let modif = "bonjour"
    fs.writeFile('test.txt', modif, 'utf-8', (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("File written successfully");
        console.log("The written has the following contents:");
        console.log(modif);
    })

})
