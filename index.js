var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var path1 = "images/dice"+randomNumber1+".png";
var path2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", path1)
document.querySelector(".img2").setAttribute("src", path2)

if(path1>path2){
    document.querySelector("h1").innerHTML="Player1 wins 🥳 ";
}else if(path1<path2){
    document.querySelector("h1").innerHTML="Player2 wins 🥳 ";
}else if(path1 == path2){
    document.querySelector("h1").innerHTML="draw 😯!";
}else{
    document.querySelector("h1").innerHTML="Refresh me";
}
function refreshPage(){
    window.location.reload();
} 