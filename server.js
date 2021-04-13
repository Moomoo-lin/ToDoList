/* node 內建的http 相關module
const http =require('http');
const server = http.createServer(handler);//裡面放參數

function handler(req,res){
    console.log(req.url)
    if(req.url==='/hello'){

         res.write('hello world')
         
    }
   
    res.end();
}

server.listen(5001)
*/
const express = require('express');
const app = express();
const port = 5001;

// 設定 view engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('index')
})

app.get('/hello', (req, res) => {
// 叫 express 去 render views 底下叫做 hello 的檔案，副檔名可省略
  res.render('hello')
})

app.listen(port, () => {
  console.log('magicc happens on port:'+port)
})




