
document.querySelector(".btn").addEventListener("click",wins)
var count=0;
function wins(){
document.querySelector("h3").innerHTML='You have generated '+count+' results';
count++;
var pl1=Math.floor(Math.random()*6)+1;
var pl2=Math.floor(Math.random()*6)+1;
while(pl1===pl2)
    {
        pl2=Math.floor(Math.random()*6)+1;
    }
    switch(pl1)
      {
          case 1: document.querySelector(".dice .img1").setAttribute("src","images/dice1.png");
              break;
          case 2: document.querySelector(".dice .img1").setAttribute("src","images/dice2.png");
              break;
          case 3: document.querySelector(".dice .img1").setAttribute("src","images/dice3.png");
              break;
          case 4: document.querySelector(".dice .img1").setAttribute("src","images/dice4.png");
              break;
          case 5: document.querySelector(".dice .img1").setAttribute("src","images/dice5.png");
              break;
          case 6: document.querySelector(".dice .img1").setAttribute("src","images/dice6.png");
              break;
      }
      switch(pl2)
     {
         case 1: document.querySelector(".dice .img2").setAttribute("src","images/dice1.png");
             break;
         case 2: document.querySelector(".dice .img2").setAttribute("src","images/dice2.png");
             break;
         case 3: document.querySelector(".dice .img2").setAttribute("src","images/dice3.png");
             break;
         case 4: document.querySelector(".dice .img2").setAttribute("src","images/dice4.png");
             break;
         case 5: document.querySelector(".dice .img2").setAttribute("src","images/dice5.png");
             break;
         case 6: document.querySelector(".dice .img2").setAttribute("src","images/dice6.png");
             break;
     }
if (pl1>=pl2)
{
    document.querySelector("h1").innerHTML='<i class="fa-solid fa-flag-checkered" style="color:red"></i> Player 1 wins';
}
else if(pl2>pl1){
    document.querySelector("h1").innerHTML='Player 2 wins <i class="fa-solid fa-flag-checkered" style="color:red"></i> <br>';
}

}
