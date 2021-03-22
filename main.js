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



//checked symbol
var list =document.querySelector('ul');
list.addEventListener('click',function(ev){
  if(ev.target.tagName ==='LI'){
    ev.target.classList.toggle('checked');
  }
},false);

//save waitlist
function Waitlist(){
var waitlist =document.getElementsByClassName('checked');
var i;

  for(i=0;i<=waitlist.length;i++){
  waitlist[i].style.display="none";
 }
}
//Click on All btn to show every list
function showall(){
  var alllist =document.querySelector('ul');
  alllist.addEventListener('click',function(ev){
    if(ev.target.tagName ==='LI'){
      var div =this.parentElement;
    div.style.display="visible";
    }
  },false);
}
//save DONElist
function Donelist(){
  var donelist =document.getElementsByTagName('li');
  var i;
  
     for(i=0;i<=donelist.length;i++){
    donelist[i];
  }
 
  }

//create new list when click on add btn
function newElement(){
  var li =document.createElement("li");
  var inputValue =document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue ===''){
    alert("你沒有寫任何東西");
  }else{
    document.getElementById("myUL").appendChild(li);
    //addWaititem(inputValue);
  }
  document.getElementById("myInput").value="";
  
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

