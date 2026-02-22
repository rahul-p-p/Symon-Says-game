let gameseq=[];
let userseq=[];

let colorbtn=["red","yellow","green","blue"];

let started=false;
let level=0;
let highscore=0;

let h=document.querySelector('h2');

document.addEventListener("keydown",function(){
    if(started==false){
        started=true;
        levelup();
    };
    
});

function levelup(){
    level++;
    h.innerText=`Level ${level}`;
    userseq=[];

    let randomindex=Math.floor(Math.random()*4);
    let randomcolor=colorbtn[randomindex];
    let randbtn=document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    flash(randbtn);
}

function flash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },200);
}

function btnpress(){
    let btn=this;
    flash(btn);

    let btncolor=btn.getAttribute("id");
    userseq.push(btncolor);

    anscheck(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function anscheck(index){
    if(userseq[index]===gameseq[index]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h.innerHTML=`Game Over! Your Score is <b>${level-1}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{document.querySelector("body").style.backgroundColor=""},500);
        highscorecheck();
        gamerestart();
    }
}
function gamerestart(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
function highscorecheck(){
    if(highscore<level-1){
        highscore=level-1;
    }
    hg2.innerText=`High Score: ${highscore}`;
}
let hg2=document.querySelector("h4");
