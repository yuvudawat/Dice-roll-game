var randomno1= Math.floor(Math.random()*6)+1;
var diceimg1= "images/dice"+randomno1+".png" 
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", diceimg1)
var randomno2= Math.floor(Math.random()*6)+1;
var diceimg2= "images/dice"+randomno2+".png" 
var img1 = document.querySelectorAll("img")[1];
img1.setAttribute("src", diceimg2)

if(randomno1>randomno2){
    var head1= document.querySelectorAll("h1")[0];
    head1.innerHTML="Player 1 Won";
}
else if(randomno1<randomno2){
    var head2= document.querySelectorAll("h1")[0];
    head2.innerHTML="Player 2 Won";
}
else{
    var head3= document.querySelectorAll("h1")[0];
    head3.innerHTML="Draw Refresh Again";
}