// let userscore=0;

// let compscore=0;



// let userpara=document.querySelector("#user-score");

// let comppara=document.querySelector("#comp-score");



// const msg = document.querySelector("#msg");



// const playgame = (userchoice) => {

//     const compchoice = gencomp();

//     if(compchoice === userchoice){

//         drawgame();

        

//     }else{

//     let userwin = true;

//       if(userchoice === "rock"){

//         userwin = compchoice === "papper" ? false:true;

//       }else if(userchoice ==="papper"){

//         userwin = compchoice === "scissor" ? false : true;

//       }else{

//        userwin =compchoice ==="rock"? false : true;

//       }

//       showwinner(userwin,userchoice,compchoice);

// }

// }

// const showwinner = (userwin,userchoice,compchoice) =>{

//   if(userwin){

//     userscore++;

//     userpara.innerText = userscore;

//     msg.innerText = `you win! your ${userchoice} beats ${compchoice}` ;

//     msg.style.backgroundColor="green";

//   }else{

//     compscore++;

//     comppara.innerText = compscore;

//     msg.innerText =`you lose, ${compchoice} beats your ${userchoice}`;

//     msg.style.backgroundColor ="red";

//   }

// }

// const drawgame = () => {

   

//     msg.innerText ="game draw,play again";

//     msg.style.backgroundColor = "rgb(41, 19, 138)";

// }

// const gencomp = () => {

//     let arr=["rock","papper","scissor"];

    

//     const Randomi=Math.floor(Math.random() * 3);

//     return arr[Randomi];

// }



 

// const choices = document.querySelectorAll(".choice");

// choices.forEach((choice) => {

   

//     choice.addEventListener("click",() => {

//         const userchoice=choice.getAttribute("id");

//         playgame(userchoice);

       

//     })

// });

let userscore = 0;

let compscore=0;



const userpara = document.querySelector("#user-score");

const comppara = document.querySelector("#comp-score")

const msgcontainer = document.querySelector(".msg-container");

const msg = document.querySelector("#msg");



let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {

  choice.addEventListener("click",() => {

    const userchoice = choice.getAttribute("id");

    

    playgame(userchoice);

  })

})

const gencomp = () => {

  let arr = ["rock","papper","scissor"];

  let random=Math.floor(Math.random() * 3);

  return arr[random];

}

const drawgame = () => {

 msg.innerText = `game was draw`;

 msg.style.backgroundColor = "rgb(27, 12, 97)";

}





const playgame = (userchoice) => {

  // console.log("userchoice=",userchoice);

  const compchoice = gencomp();

  // console.log("compchoice=",compchoice);

  if(userchoice === compchoice){

    drawgame();

  }else{

    if(userchoice === "rock" && compchoice ==="scissor"){

      userscore++;

      userpara.innerText=userscore;

      msg.innerText =`you won,your ${userchoice} beats ${compchoice}`;

      msg.style.backgroundColor = "green";

    }else if(userchoice ==="papper" && compchoice === "rock"){

      userscore++;

      userpara.innerText=userscore;

      msg.innerText =`you won,your ${userchoice} beats ${compchoice}`;

      msg.style.backgroundColor = "green";

    }else if(userchoice === "scissor" && compchoice === "papper"){

      userscore++;

      userpara.innerText=userscore;

      msg.innerText =`you won,your ${userchoice} beats ${compchoice}`;

      msg.style.backgroundColor = "green";

    }else{

      compscore++;

      comppara.innerText=compscore;

      msg.innerText =`you lose,${compchoice} beats your ${userchoice}`;

      msg.style.backgroundColor = "red";

    }

    

  }

}
