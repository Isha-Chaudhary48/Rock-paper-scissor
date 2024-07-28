let options =document.querySelectorAll(".choices");
let container=document.querySelector(".msgContainer");
let msg=document.querySelector(".msg");
let score=document.querySelector(".score");
let userScore1=document.querySelector("#userScore");
let compScore1=document.querySelector("#compScore");
let userCount=0;
let compCount=0;
let userScore=0;
let compScore=0;

options.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        let userChoose=choices.getAttribute("id");
        playGame(userChoose);
        
    });
});
const playGame=(userChoose)=>{
   const userChoice= userChoose;
   console.log("user choice = ",userChoice)

   const compChoice=compChoose();
   console.log("computer choice = ",compChoice);
   if(userChoice === compChoice)
   {
    drawGame();
   }
   else{
    let userWin=true
    if(userChoice==="rock")
        {
            userWin=compChoice==="paper"? false:true;
            

        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
           
        }
        else if(userChoice==="scissor"){
            userWin=compChoice==="rock"?false:true;
           
        }
        showWinner(userWin);
       
    
   }
    

}
const showWinner=(userWin)=>{
    if(userWin)
    {
        userCount++;
        userScore1.innerText=userCount;
        console.log("user won");
        
        

        msg.innerText="user won";

    }
    else{
        compCount++;
        compScore1.innerText=compCount++;
        console.log("comp won");
        
       
        msg.innerText="comp won";
    }
}
const compChoose=()=>{
    let option=["rock", "paper", "scissor"];
    let random=Math.floor(Math.random()*3);
    return option[random];
    

}
let drawGame=()=>{
    console.log("game is draw");
    msg.innerText="game is draw";
}