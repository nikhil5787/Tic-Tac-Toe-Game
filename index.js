console.log("Welcome to game");
let turn="x";
let gameover=false;


// function change to the turn

 const changeturn=()=>{
 return turn==="x"? "0":"x";

}

// function check to the win
const checkwin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,7],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
    wins.forEach(e=>{
       if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !=='')){
           document.querySelector(".info").innerHTML=boxtext[e[0]].innerText + "Won"
           gameover=true;
       }
    

    })

        

}

// Game logic

let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText="turn for" +turn;

            }
        }

    });


});

reset.addEventListener("click",()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText=" "

    });
    turn="x";
    gameover=false;
        document.getElementsByClassName("info")[0].innerText="turn for" +turn;

        

}
)

