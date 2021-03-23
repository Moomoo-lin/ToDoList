// Create a "close" button and append it to each list item
var myNodelist=document.getElementsByTagName("LI");
var i;
for(i = 0; i < myNodelist.length;i++ ){
  var span =document.createElement("SPAN");
  var txt  =document.createTextNode("\u00D7");
  span.className="close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
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
document.getElementById("myInput").onkeypress=function(event){
  if(event.keycode===13){
    newElement();
  }
};


//checked symbol
var list =document.querySelector('ul');

list.addEventListener('click',function(ev){
  
  if(ev.target.tagName ==='LI' ){
    ev.target.classList.toggle('checked');
    
    obj_list.done="true";
    console.log(obj_list);
    
  }
 
}),
 

//save waitlist
function Waitlist(){

         //跑出HTMLCollection [li.checked]
     
        if(todolist!=null){
          for(var i=0;i<todolist.length;i++){
            if(!todolist[i].done){
              todostring='<li'+ 'class="todo" '+todolist[i].todo+'>'+'</li>';
            }
          }
        }
  

            // if(waitlist)
           //   console.log(waitlist);
            // for(var i=0;i<=waitlist.length;i++){
         
        // waitlist[i].style.display="none";

       // }
}

 window.addEventListener("load",load);

//Click on All btn to show every list
function showall(){
  var alllist=document.getElementsByClassName('checked')
  var i;

  for(i=0;i<=alllist.length;i++){
    alllist[i].style.display="block";

  }
}
//save DONElist
function Donelist(){
  var donelist =document.getElementsByClassName('check');
  var i;
 
  for(i=0;i<=donelist.length;i++){
     donelist[i].style.display="none";
 }
  }

//create new list when click on add btn
function newElement(e){

 var obj_list ={
    todo: "",
    done:false
  };
  
  var li =document.createElement("li");
  var inputValue =document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue ===''){
    alert("你沒有寫任何東西");
  }else{
    document.getElementById("myUL").appendChild(li);

   
  } 
  obj_list.todo=document.getElementById("myInput").value;
    
    var todolist=[];
    todolist.push(obj_list);//將值存進todolist中
    console.log(obj_list);
   
  document.getElementById("myInput").value="";
   load();
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
  // save already done list

}

  function load(){
    var todo=document.getElementById("myUL");
    todostring ="";
    donestring="";
    

  }

