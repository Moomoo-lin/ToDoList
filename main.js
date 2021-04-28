// window.onload=loadd();
// window.addEventListener("loadd",loadd);

//const { resolveInclude } = require("ejs");
//  const fetch = require("node-fetch");

//get後端的全部資料 先不配





let src="http://localhost:7000/home";
fetch(src,{method:"GET",mode:"no-cors"}).then((response)=>{
  console.log(response);
  // return response.json();//用字串方式取回物件

}).then(function(data){
        console.log("workok");
});



// GET;HOME 可以 但其他的可能要再試看看
// POST;vewtask有fetch成功 但裡面沒有東西
//利用fetch將值存入後端 並回傳status:200

//把POST值打入後端 並存進資料庫
//東西會被包成json檔



// Create a "close" button and append it to each list item
var myNodelist=document.getElementsByTagName("LI");
var i;
//console.log(myNodelist); HTMLCollection(2) [li.checked, li.todo]
for(i = 0; i < myNodelist.length;i++ ){
  var span =document.createElement("SPAN");//創建元素
  var txt  =document.createTextNode("\u00D7");//創建節點
  span.className="close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);//添加 子節點
}
// Click on a close button to hide the current list item
var close =document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
  close[i].onclick =function(){
    var div =this.parentElement;
    div.style.display="none";
  }
}

function saveData(data){
  localStorage.setItem("mytodolist",JSON.stringify(data));
}
function loadData() { 
  var hisTory = localStorage.getItem("mytodolist"); 
  if(hisTory !=null){ 
  return JSON.parse(hisTory);  //JSON物件轉換為JS物件 
  } 
  else { return []; } 
  } 




//checked symbol
var list =document.querySelector('ul');
list.addEventListener('click',function(ev){
  
  if(ev.target.tagName ==='LI' ){
    if(ev.className ==='todo'){
      ev.target.classList.toggle('todo');
       ev.target.classList.toggle('checked');
       
    }else 
    {
      ev.target.classList.toggle('checked');
      ev.target.classList.toggle('todo');
    }
  }
}, false
);
 



//save waitlist
function Waitlist(){
         //跑出HTMLCollection [li.checked]
         checked=$(".checked");
         Todo=$(".todo");

         $(".checked").hide();
         $(".todo").show();
        
       // for(i=0;i<=10;i++){
       //checked[i].style.display="none";
       //Todo[i].style.display="";
       //console.log(checked[i]);
  }
         
  

 

//Click on All btn to show every list 全部
function showall(){
  checked=$(".checked");
  Todo=$(".todo");
  $(".checked").show();
  $(".todo").show();
    
  

}
//save DONElist
function Donelist(){
  Todo=$(".todo");
  checked=$(".checked");
  $(".checked").show();
  $(".todo").hide();
 
  }

//create new list when click on add btn
function newElement(e){


 var obj_list ={
    content: "", //儲存使用者輸入的資料
    status:0//對待辦事項進行分類
  };
 
 var li =document.createElement("li");
  var inputValue =document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.setAttribute("class","todo");
  li.appendChild(t);

  //$(t).addclass("todo");
  if(inputValue ===''){
    alert("你沒有寫任何東西");
  }else{
    document.getElementById("myUL").appendChild(li);
  } 
   obj_list.todo=document.getElementById("myInput").value;
    var todolist=[];
    todolist.push(obj_list);//將值存進todolist中
    saveData(todolist);
    
    console.log(todolist);
    console.log(obj_list);
    
    const uri="index.js";
    fetch(uri, {
      method:'POST',
    body:encodeURI(JSON.stringify({
      content:'yo',
      status:0
    })),
    headers:{
      "Content-Type" : "application/x-www-form-urlencoded; charset=utf-8"
    }
  })
   .then((res)=>{
     return res.json();
   })
   .catch(function(err){
     
   })
    // const uri = "http://127.0.0.1:5500/index.html";
// fetch(uri, {
//   method:'POST',
//   // mode:"no-cors",
//   body:encodeURI(JSON.stringify({
//     content:'ss3',
//     status:'0'
//   })),
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
//   }
// })
// .then((res) => {
//        // 使用 json() 可以得到 json 物件
//     // res.send("{"+'\n'+"content:"+res.body.content+'\n'+"status:"+res.body.status+'\n'+"}");//回傳content欄位的值
//     return res.json()
//   })
//   .then((response) => {
//     console.log(response); 
// });
  // })
   
    
   document.getElementById("myInput").value="";//初始化輸入框
   load();//將使用者輸入的資料新增至dom節點
  var span =document.createElement("SPAN");
  var txt  =document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  for( i = 0 ; i < close.length; i++ ) {
    close[i].onclick =function(){
      var div =this.parentElement;
      div.style.display ="none";
    }
  }
  //向後端請求
   

  // save already done list

}

  function load(){
    
    var todo=document.getElementsByClassName("todo");
    var done=document.getElementsByClassName('checked');
    todostring ="";
    donestring="";
    //todolist=loadData();
    //newElement();
  if(todolist !=null){
      for (var i=0; i<todolist.length; i   ){
        if(!todolist[i].done){
           todostring="<li class='todo'>"+todolist[i].todo+"</li>";
        }else{
             donestring="<li class='checked'>"+todolist[i].todo+"</li>";
            }
    }
    todo.innerHTML = todoString;
    done.innerHTML = doneString;
  }
 else{
    todo.innerHTML = "";
    done.innerHTML = "";
    todocount.innerHTML = 0;
    donecount.innerHTML = 0;
 }
  }

  //post串接後端東西
  
  

 

