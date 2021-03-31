//後端伺服器

var express    = require('express');
var app        = express();

 //設定一個port號


var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res) {  
  res.send('<h1>Hello World</h1>');   //返回hello world 伺服器回應所送出的內容
});

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);

//params 可拿到網址上指定的參數

//連線資料庫
var mysql =require('mysql');
var connection =mysql.createConnection({
   host :'localhost',
   user :'root',
   password:'lovedali99',
   database:'todolist',
});
connection.connect();

/*查詢*/
 
var  sql = 'SELECT * FROM todolist';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
       
      
      });
 
connection.end();
















/*var delSql = 'DELETE FROM todolist where id=0';
//删
connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
 
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end();

*/


/*更新數據
var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
//改
connection.query(modSql,modSqlParams,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});
 
connection.end();


*/






  /*插入資料
var  addSql = 'INSERT INTO todolist(ID,content,status) VALUES(3,?,?)';
var  addSqlParams = ['刷牙', '2'];
//增
connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
 
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();
*/



/*測試連接
  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    c/onsole.log('The solution is: ', rows[0].solution);
  });
*/

/*輸入完之後 CMD執行 node app1.js
  可以自行更改>>7070
   $env:PORT=7070
   node app1.js
   it's work!
*/