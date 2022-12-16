function name(errname){
  while(errname=="" || errname==null){
  errname=prompt("Please enter your Nickname");
  if(errname=="" || errname==null){
  alert("please entern nick name")};
  }
return errname;
  }
var UserName=localStorage.getItem("name");
if(UserName=="" || UserName==null){
  UserName = name(UserName);  }
localStorage.setItem("name", UserName);
  console.log(localStorage.getItem("name"));
const div1= document.createElement("div");
div1.id="div1";
const img1 = document.createElement("img");
img1.src="img/bulbazavr.png";
img1.classList.add("div3");
const a1 = document.createElement("a");
a1.href="index2.html";
a1.appendChild(img1);
const img2 = document.createElement("img");
img2.src="img/squirtle.png";
img2.classList.add("div3");
const a2 = document.createElement("a");
a2.href="index2.html";
a2.appendChild(img2);
const img3 = document.createElement("img");
img3.src="img/charmander.png";
img3.classList.add("div3");
const a3 = document.createElement("a");
a3.href="index2.html";
a3.appendChild(img3);
const img11 = document.createElement("button");
img11.classList.add("div2");
img11.id=("img11");
const img12 = document.createElement("button");
img12.classList.add("div2");
img12.id=("img12");
const img13 = document.createElement("button");
img13.classList.add("div2");
img13.id=("img13");
const pname=document.createElement("p");
const divp1=document.createElement("div");
const p2=document.createElement("p");
p2.textContent="Choose your Pokémon:";
pname.innerHTML="Welcome <strong>"+UserName+"</strong> to the World of Pokémon!";
document.body.appendChild(divp1);
divp1.classList.add("divname");
divp1.appendChild(pname);
divp1.appendChild(p2);
document.body.appendChild(div1);
img11.appendChild(a1);
div1.appendChild(img11);
img12.appendChild(a2);
div1.appendChild(img12);
img13.appendChild(a3);
div1.appendChild(img13);

a1.addEventListener('click',()=>{
 localStorage.setItem("Pokemon", "Bulbasaur");
});
a2.addEventListener('click',()=>{
  localStorage.setItem("Pokemon", "Squirtle");
 });
a3.addEventListener('click',()=>{
  localStorage.setItem("Pokemon", "Charmander");
 });
 var knopka = document.getElementById("stik");
 knopka.addEventListener('click',()=>{
  document.location='index.html'
});