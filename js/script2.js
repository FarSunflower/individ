const div1= document.createElement("div");
div1.id="div1";
const img1 = document.createElement("img");
if(localStorage.getItem("Pokemon")=="Bulbasaur"){
    img1.src="img/bulbazavr.png";
} else if(localStorage.getItem("Pokemon")=="Squirtle"){
    img1.src="img/squirtle.png";
} else if(localStorage.getItem("Pokemon")=="Charmander"){
    img1.src="img/charmander.png";}
img1.classList.add("div3");
const podium = document.createElement("img");
//table
const img2 = document.createElement("button");
img2.classList.add("div3");
const tr1=document.createElement("tr");
const tr2=document.createElement("tr");
const tr3=document.createElement("tr");
const tr4=document.createElement("tr");
const td11=document.createElement("td");
const td12=document.createElement("td");
const td13=document.createElement("td");
const td21=document.createElement("td");
const td22=document.createElement("td");
const td23=document.createElement("td");
const td31=document.createElement("td");
const td32=document.createElement("td");
const td33=document.createElement("td");
const td41=document.createElement("td");
const td42=document.createElement("td");
const td43=document.createElement("td");
const table1 = document.createElement("table");
const a4=document.createElement("a");
a4.href="indexlw8.html";
const but1=document.createElement("button");
const but2=document.createElement("button");
const but3=document.createElement("button");
but1.textContent="BACK";
but2.textContent="START";
but3.textContent="RESET";

td12.innerHTML="ROUND 1";


td22.innerHTML="ROUND 2";


td32.innerHTML="ROUND 3";

but1.classList="butns";
but2.classList="butns";
but3.classList="butns";
tr1.appendChild(td11);
tr1.appendChild(td12);
tr1.appendChild(td13);
tr2.appendChild(td21);
tr2.appendChild(td22);
tr2.appendChild(td23);
tr3.appendChild(td31);
tr3.appendChild(td32);
tr3.appendChild(td33);
a4.appendChild(but1);
td41.appendChild(a4);
tr4.appendChild(td41);
td42.appendChild(but2);
tr4.appendChild(td42);
td43.appendChild(but3);
tr4.appendChild(td43);
table1.appendChild(tr1);
table1.appendChild(tr2);
table1.appendChild(tr3);
table1.appendChild(tr4);

//table
const img3 = document.createElement("img");
var masuvPokemonov=["img/bulbazavr.png","img/squirtle.png","img/charmander.png","img/pikachu.png"]
var random1=Math.floor(Math.random()*masuvPokemonov.length);
img3.src=masuvPokemonov[random1];
img3.classList.add("div3");
const img11 = document.createElement("button");
img11.id="img11";
img11.classList.add("div2");
const img12 = document.createElement("button");
img12.id="img12";
img12.classList.add("div2");
const img13 = document.createElement("button");
img13.id="img13";
img13.classList.add("div2");
const pname=document.createElement("p");
const divp1=document.createElement("div");
const p2=document.createElement("p");
p2.innerHTML="Press Start";
pname.innerHTML="<strong>"+localStorage.getItem("name")+" vs Wild Pokémon"+"</strong>";
document.body.appendChild(divp1);
divp1.classList.add("divname");
divp1.appendChild(pname);
divp1.appendChild(p2);
document.body.appendChild(div1);
img11.appendChild(img1);
div1.appendChild(img11);
img12.appendChild(table1);
div1.appendChild(img12);
img13.appendChild(img3);
div1.appendChild(img13);
var count=0;
var score1=0;
var score2=0;   
but2.addEventListener('click',()=>{
    let uSER;
    let cOMPUTER;
    if((img1.getAttribute("src")=="img/bulbazavr.png") && (img3.getAttribute("src")=="img/bulbazavr.png")){
        uSER=Math.floor(Math.random()*(7-1))+1;
        cOMPUTER=Math.floor(Math.random()*(7-1))+1;
        console.log("bulb")
    } 
    if((img1.getAttribute("src")=="img/charmander.png") && (img3.getAttribute("src")=="img/charmander.png")){
        uSER=Math.floor(Math.random()*(7-1))+1;
        cOMPUTER=Math.floor(Math.random()*(7-1))+1;
        console.log("char")
    } 
    if((img1.getAttribute("src")=="img/squirtle.png") && (img3.getAttribute("src")=="img/squirtle.png")){
        
        uSER=Math.floor(Math.random()*(7-1))+1;
        cOMPUTER=Math.floor(Math.random()*(7-1))+1;
        console.log("sqrt")
    } 
    if((img3.getAttribute("src")=="img/pikachu.png")){
        uSER=Math.floor(Math.random()*(7-1))+1;
        cOMPUTER=Math.floor(Math.random()*(7-1))+1;
        console.log("pika")
    } 
    if((img1.getAttribute("src")=="img/bulbazavr.png") && (img3.getAttribute("src")=="img/charmander.png")){
        uSER=Math.floor(Math.random()*(6-1))+1;
        cOMPUTER=Math.floor(Math.random()*(7-1))+1;
        console.log("bulb vs char")
    }       
    if ((img1.getAttribute("src")=="img/charmander.png") && (img3.getAttribute("src")=="img/bulbazavr.png")) {
        uSER=Math.floor(Math.random()*(7-1))+1;
        cOMPUTER=Math.floor(Math.random()*(6-1))+1;
        console.log("char  vs bulb")
    }
    if((img1.getAttribute("src")=="img/charmander.png") && (img3.getAttribute("src")=="img/squirtle.png")){
        uSER=Math.floor(Math.random()*(6-1))+1;
        cOMPUTER=Math.floor(Math.random()*(7-1))+1;
        console.log("char vs sqrt")
    }
    if ((img1.getAttribute("src")=="img/squirtle.png") && (img3.getAttribute("src")=="img/charmander.png")) {
        uSER=Math.floor(Math.random()*(7-1))+1;
        cOMPUTER=Math.floor(Math.random()*(6-1))+1;
        console.log("sqrt vs char")
    }
    if((img1.getAttribute("src")=="img/squirtle.png") && (img3.getAttribute("src")=="img/bulbazavr.png")){
        uSER=Math.floor(Math.random()*(6-1))+1;
        cOMPUTER=Math.floor(Math.random()*(7-1))+1;
        console.log("sqrt vs bulb")
    } 
    if ((img1.getAttribute("src")=="img/bulbazavr.png") && (img3.getAttribute("src")=="img/squirtle.png")) {
        uSER=Math.floor(Math.random()*(7-1))+1;
        cOMPUTER=Math.floor(Math.random()*(6-1))+1;
        console.log("bulb vs sqrt");
    }
    let arr1=[td11,td21,td31];
    let arr2=[td13,td23,td33];
    arr1[count].textContent=uSER;
    arr2[count].textContent=cOMPUTER;
    if (uSER>cOMPUTER){
        score1++;
        arr1[count].style.color="green";
        arr2[count].style.color="red";
    } else if (uSER<cOMPUTER){
        score2++;
        arr2[count].style.color="green";
        arr1[count].style.color="red";
    } else {
        arr1[count].style.color="red";
        arr2[count].style.color="red";
        score1++;
        score2++;
    }
    console.log(score1);
    if(count<3){
    count++;
    }
    if(count==3){
        if (score1>score2){
            p2.innerHTML="<strong>"+localStorage.getItem("name")+"</strong> WIN!";
        } else if (score1<score2){
            p2.innerHTML="<strong>"+"Wild Pokémon"+"</strong> WIN!"
        } else {
            p2.innerHTML="<strong>Draw</strong>"
        }
    }
});
but3.addEventListener('click',()=>{
count=0;
p2.textContent="Press Start";
score1=0;
score2=0;
let arr1=[td11,td21,td31];
let arr2=[td13,td23,td33];
for(let i=0;i<3;i++){
arr1[i].textContent="";
arr2[i].textContent="";
}
});