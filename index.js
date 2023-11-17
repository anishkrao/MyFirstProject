var rn1 = Math.random();
var rn2 = Math.random();
rn1 = (rn1*6);
rn2 = (rn2*6);
var pl1 = Math.floor(rn1)+1;
var pl2 = Math.floor(rn2)+1;

if(pl1>pl2){
    document.querySelector(".header .winner").innerHTML = "Player 1 Wins!"
}
else if(pl1<pl2){
    document.querySelector(".header .winner").innerHTML = "Player 2 Wins!"
}else{
    document.querySelector(".header .winner").innerHTML = "It's a Draw!"
}

switch(pl1){

    case 1:
        document.querySelector(".player1 img").setAttribute("src","./images/dice1.png");
        break;
    case 2:
        document.querySelector(".player1 img").setAttribute("src","./images/dice2.png");
        break;
    case 3:
        document.querySelector(".player1 img").setAttribute("src","./images/dice3.png");
        break;    
    case 4:
        document.querySelector(".player1 img").setAttribute("src","./images/dice4.png");
        break;
    case 5:
        document.querySelector(".player1 img").setAttribute("src","./images/dice5.png");
        break;
    case 6:
        document.querySelector(".player1 img").setAttribute("src","./images/dice6.png");
        break;
}
switch(pl2){

    case 1:
        document.querySelector(".player2 img").setAttribute("src","./images/dice1.png");
        break;
    case 2:
        document.querySelector(".player2 img").setAttribute("src","./images/dice2.png");
        break;
    case 3:
        document.querySelector(".player2 img").setAttribute("src","./images/dice3.png");
        break;    
    case 4:
        document.querySelector(".player2 img").setAttribute("src","./images/dice4.png");
        break;
    case 5:
        document.querySelector(".player2 img").setAttribute("src","./images/dice5.png");
        break;
    case 6:
        document.querySelector(".player2 img").setAttribute("src","./images/dice6.png");
        break;
}