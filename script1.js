function buttonclick(val){
document.getElementById("screen").value+=val;
}
function equalclick(){
var txt=document.getElementById("screen").value;

var result=eval(txt);

document.getElementById("screen").value=result;
}
function displayclear(){
document.getElementById("screen").value=" ";
}