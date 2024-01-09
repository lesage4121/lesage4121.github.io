let myimg = document.querySelector("img");
let mybutton = document.querySelector("button");
let heading = document.querySelector("h1")

function setuser(){
  let myname = prompt("veuillez saisir votre nom")
  localStorage.setItem("nom",myname);
  heading.textContent = "je me connecte au nom de"+myname;
}

if(!localStorage.getItem("nom"))
{
  setuser();
}
else
{
   let storedname = localStorage.getItem("nom");
   heading.textContent = " Je me connecte au nom de "+storedname
}
 
 myimg.addEventListener("click", function(){
    let mysrc = myimg.getAttribute("src")
  if (mysrc === "images/As1.jpg")
  {
    myimg.setAttribute("src","images/as5.jpg");
  }
  else{
    myimg.setAttribute("src","images/As1.jpg");
  }
 });
 mybutton.addEventListener("click", function(){
  setuser();
 });

 