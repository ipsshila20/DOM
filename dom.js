// Que1
const getId=document.getElementById("text");
console.log(getId);
console.log(getId.innerText);

//Que2
const getTag=document.getElementsByTagName("h1")[0];
console.log(getTag.innerText);

//Que3
const getClass=document.getElementsByClassName("box")[0];
console.log(getClass.innerText);

//Que4
function changehead (){
    let heading=document.querySelector("#heading");
   if(heading.innerHTML==="Hello World"){
    heading.innerHTML="Hello"
   }
   else{
    heading.innerHTML="Hello World";
   }
}

//Que5
function changeText(){
    let text=document.querySelector("#changetext");
    if(text.innerText==="Hello World"){
        text.innerText="Welcome to Elevation academy";
    }
    else{
        text.innerText="Hello World";
    }
}

//Que6
// open the inspect and check id and style
const color=document.getElementsByTagName("h2")[0];
color.setAttribute("id","heading");
color.style.color="red";


//Que7

let btn=document.querySelector("#changeDirection");
btn.addEventListener("click",myfunction);
function myfunction(){
    if(flex.style.flexDirection==="column"){
                flex.style.flexDirection="row";
            }
            else{
                flex.style.flexDirection="column";
            }
}
const flex=document.getElementsByClassName("flex")[0];
let asch=document.getElementById("asch");
const box=document.getElementsByClassName("bx");
 for(i=0; i<box.length ;i++){
    box[i].addEventListener("click",()=>{
      if(asch.flexDirection==="row"){
        flex.classList.toggle("toggle");
        asch.classList.toggle("flex")
      }
      else{
        flex.classList.toggle("toggle");
        asch.classList.toggle("flex")
      }
    })
 }

//Que8
let clockshow=document.querySelector("#clock");
function clock (){
    let time=new Date().toLocaleTimeString();
    clockshow.innerHTML=time;
}
setInterval(clock,1000)