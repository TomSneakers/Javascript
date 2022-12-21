const fs= require ('fs')
const http = require('http')
const server = http.createServer((req, res) => {
    fs.readFile('test.txt','utf-8', (err,data)=>{
        if(err){
            console.log(err)
                res.statusCode =500
                res.end ('an error has occured');
                return;
        }
        res.setHeader('Content-Type','text/plain')
        res.end(data)
      })
    })
  

server.listen(3000, ()=>{
    console.log('server web listening on port 3000')
})