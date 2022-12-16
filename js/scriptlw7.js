const myMainDiv = document.createElement("div");
const input1=document.createElement("input");
const img1=document.createElement("img");
const myDiv = document.createElement("div");
const myDiv2 = document.createElement("div");
const myP = document.createElement("P");
var knopka = document.getElementById("stik");
knopka.addEventListener('click',()=>{
    document.location='index.html'
});
myMainDiv.id="main";
myDiv.id="imgDiv";
myDiv2.id="textCenter";
img1.src="img/cosmos.png"
input1.id="input1";

myMainDiv.appendChild(input1);
myMainDiv.appendChild(myDiv);
myDiv.appendChild(img1);
myDiv.appendChild(myDiv2);
myMainDiv.appendChild(myP);
document.body.appendChild(myMainDiv);

img1.addEventListener('click',()=>{
   if(input1.value===""){
      alert('Заповніть поле');
      return 0;
   }
   let textOnImg=["Yes","No","Maybe"];
   let srcForIMg=["img/earth.png","img/mars.jpg","img/luna.png"];
   let backForMain=
   ["radial-gradient(circle, white 0%,#1e3855 80%)",
   "radial-gradient(circle, white 0%,#cf5e13 80%)",
   "radial-gradient(circle, white 0%,#4c4f52 80%)"]
   let num=Math.floor(Math.random()*textOnImg.length);
   img1.src=srcForIMg[num];
   myMainDiv.style.background=backForMain[num];
   myDiv2.innerHTML="<br>"+textOnImg[num];
});
