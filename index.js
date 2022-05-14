let loginBtn=document.querySelector("#login")
loginBtn.addEventListener("click",login);
let signupBtn=document.querySelector("#signup")
signupBtn.addEventListener("click",signup);
  
function login(){
    // s.style.display="none"; 
    l.style.visibility="visible";
    imgsection.style.filter="blur(4px)"
    citsection.style.filter="blur(4px)" 
    l.style.border="2px solid red"
    l.style.width="50%"
    l.style.height="80%"
}
function signup(){
    // l.style.display="none"; 
    s.style.visibility="visible";
    imgsection.style.filter="blur(4px)"
    citsection.style.filter="blur(4px)" 
    s.style.border="2px solid red"
    s.style.width="50%"
    s.style.height="80%"

}
let s=document.getElementById("sign")
let l=document.getElementById("log")
let imgsection = document.getElementsByClassName("img-section")[0]
let citsection = document.getElementsByClassName("city-container")[0]
let form = document.getElementsByClassName("login")[0]

citsection.addEventListener("click",()=>{
    s.style.visibility="hidden"; 
    citsection.style.filter="none"
    imgsection.style.filter="none"
})
imgsection.addEventListener("click",()=>{
    s.style.visibility="hidden"; 
    citsection.style.filter="none"
    imgsection.style.filter="none"
})