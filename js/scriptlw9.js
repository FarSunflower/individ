function name(errname){
    while(errname=="" || errname==null){
    errname=prompt("Please enter your Nickname");
    if(errname=="" || errname==null){
    alert("please entern nick name")};
    }
  return errname;
    }
var UserName = name(UserName);  
const div1= document.createElement("div");
div1.id="div1";
const img1 = document.createElement("img");

img1.classList.add("div3");
//table
const img2 = document.createElement("button");
img2.classList.add("div3");
const tr1=document.createElement("tr");
const tr2=document.createElement("tr");
const tr3=document.createElement("tr");
const tr4=document.createElement("tr");
const tr5=document.createElement("tr");
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
const td51=document.createElement("td");
const td52=document.createElement("td");
const td53=document.createElement("td");
const table1 = document.createElement("table");
const but1=document.createElement("button");
const but2=document.createElement("button");
but1.textContent="START";
but2.textContent="RESET";
td12.innerHTML="ROUND 1";
td22.innerHTML="ROUND 2";
td32.innerHTML="ROUND 3";
td42.innerHTML="TOTAL";
but1.classList="butns";
but2.classList="butns";
tr1.appendChild(td11);
tr1.appendChild(td12);
tr1.appendChild(td13);
tr2.appendChild(td21);
tr2.appendChild(td22);
tr2.appendChild(td23);
tr3.appendChild(td31);
tr3.appendChild(td32);
tr3.appendChild(td33);
tr4.appendChild(td41);
tr4.appendChild(td42);
tr4.appendChild(td43);
td51.appendChild(but1);
td53.appendChild(but2);
tr5.appendChild(td51);
tr5.appendChild(td52);
tr5.appendChild(td53);
table1.appendChild(tr1);
table1.appendChild(tr2);
table1.appendChild(tr3);
table1.appendChild(tr4);
table1.appendChild(tr5);
//table
const img3 = document.createElement("img");
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
pname.innerHTML="<strong>"+UserName+" vs Computer"+"</strong>";
img1.src="img/back.png"
img3.src="img/back.png"
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
var totalUser=0;
var totalCom=0;
var scoreU=0;
var scoreCom=0;
but1.addEventListener('click',()=>{
    let uSER=Math.floor(Math.random()*(10-1))+1;
    let cOMPUTER=Math.floor(Math.random()*(10-1))+1;
    let numOfcol=Math.floor(Math.random()*(5-1))+1;
    let fourC1=["img/rHeartsix.png","img/bHeartsix.png","img/rRombsix.png","img/bKrestsix.png"];
    let fourC2=["img/rHeartseven.png","img/bHeartseven.png","img/rRombseven.png","img/bKrestseven.png"];
    let fourC3=["img/rHearteight.png","img/bHearteight.png","img/rRombeight.png","img/bKresteight.png"];
    let fourC4=["img/rHeartnine.png","img/bHeartnine.png","img/rRombnine.png","img/bKrestnine.png"];
    let fourC5=["img/rHeartten.png","img/bHeartten.png","img/rRombten.png","img/bKrestten.png"];
    let fourC6=["img/rHeartvalet.png","img/bHeartvalet.png","img/rRombvalet.png","img/bKrestvalet.png"];
    let fourC7=["img/rHeartdama.png","img/bHeartdama.png","img/rRombdama.png","img/bKrestdama.png"];
    let fourC8=["img/rHeartking.png","img/bHeartking.png","img/rRombking.png","img/bKrestking.png"];
    let fourC9=["img/rHearttyz.png","img/bHearttyz.png","img/rRombtyz.png","img/bKresttyz.png"];
    if(count==3){
        return;
    }
    if(uSER==1){
        if(numOfcol==1){img1.src=fourC1[0]; scoreU=6;} 
        else if(numOfcol==2){img1.src=fourC1[1]; scoreU=6;} 
        else if(numOfcol==3){img1.src=fourC1[2]; scoreU=6;} 
        else if(numOfcol==4){img1.src=fourC1[3]; scoreU=6;}}
    if(uSER==2){
        if(numOfcol==1){img1.src=fourC2[0]; scoreU=7;} 
        else if(numOfcol==2){img1.src=fourC2[1]; scoreU=7;} 
        else if(numOfcol==3){img1.src=fourC2[2]; scoreU=7;} 
        else if(numOfcol==4){img1.src=fourC2[3]; scoreU=7};}
    if(uSER==3){
        if(numOfcol==1){img1.src=fourC3[0]; scoreU=8;} 
        else if(numOfcol==1){img1.src=fourC3[1]; scoreU=8;} 
        else if(numOfcol==3){img1.src=fourC3[2]; scoreU=8;} 
        else if(numOfcol==4){img1.src=fourC3[3]; scoreU=8;}}
    if(uSER==4){
        if(numOfcol==1){img1.src=fourC4[0]; scoreU=9;} 
        else if(numOfcol==2){img1.src=fourC4[1]; scoreU=9;} 
        else if(numOfcol==3){img1.src=fourC4[2]; scoreU=9;} 
        else if(numOfcol==4){img1.src=fourC4[3]; scoreU=9;}}
    if(uSER==5){
        if(numOfcol==1){img1.src=fourC5[0]; scoreU=10;} 
        else if(numOfcol==2){img1.src=fourC5[1]; scoreU=10;} 
        else if(numOfcol==3){img1.src=fourC5[2]; scoreU=10;} 
        else if(numOfcol==4){img1.src=fourC5[3]; scoreU=10;}}
    if(uSER==6){
        if(numOfcol==1){img1.src=fourC6[0]; scoreU=2;} 
        else if(numOfcol==2){img1.src=fourC6[1]; scoreU=2;} 
        else if(numOfcol==3){img1.src=fourC6[2]; scoreU=2;} 
        else if(numOfcol==4){img1.src=fourC6[3]; scoreU=2;}}
    if(uSER==7){
        if(numOfcol==1){img1.src=fourC7[0]; scoreU=3;} 
        else if(numOfcol==2){img1.src=fourC7[1]; scoreU=3;} 
        else if(numOfcol==3){img1.src=fourC7[2]; scoreU=3;} 
        else if(numOfcol==4){img1.src=fourC7[3]; scoreU=3;}}
    if(uSER==8){
        if(numOfcol==1){img1.src=fourC8[0]; scoreU=4;} 
        else if(numOfcol==2){img1.src=fourC8[1]; scoreU=4;} 
        else if(numOfcol==3){img1.src=fourC8[2]; scoreU=4;} 
        else if(numOfcol==4){img1.src=fourC8[3]; scoreU=4;}}
    if(uSER==9){
        if(numOfcol==1){img1.src=fourC9[0]; scoreU=11;} 
        else if(numOfcol==2){img1.src=fourC9[1]; scoreU=11;} 
        else if(numOfcol==3){img1.src=fourC9[2]; scoreU=11;} 
        else if(numOfcol==4){img1.src=fourC9[3]; scoreU=11;}}
    if(cOMPUTER==1){
        if(numOfcol==1){img3.src=fourC1[0]; scoreCom=6} 
        else if(numOfcol==2){img3.src=fourC1[1]; scoreCom=6} 
        else if(numOfcol==3){img3.src=fourC1[2]; scoreCom=6} 
        else if(numOfcol==4){img3.src=fourC1[3]; scoreCom=6}}
    if(cOMPUTER==2){
        if(numOfcol==1){img3.src=fourC2[0]; scoreCom=7} 
        else if(numOfcol==2){img3.src=fourC2[1]; scoreCom=7} 
        else if(numOfcol==3){img3.src=fourC2[2]; scoreCom=7} 
        else if(numOfcol==4){img3.src=fourC2[3]; scoreCom=7}}
    if(cOMPUTER==3){
        if(numOfcol==1){img3.src=fourC3[0]; scoreCom=8} 
        else if(numOfcol==1){img3.src=fourC3[1]; scoreCom=8} 
        else if(numOfcol==3){img3.src=fourC3[2]; scoreCom=8} 
        else if(numOfcol==4){img3.src=fourC3[3]; scoreCom=8}}
    if(cOMPUTER==4){
        if(numOfcol==1){img3.src=fourC4[0]; scoreCom=9} 
        else if(numOfcol==2){img3.src=fourC4[1]; scoreCom=9} 
        else if(numOfcol==3){img3.src=fourC4[2]; scoreCom=9} 
        else if(numOfcol==4){img3.src=fourC4[3]; scoreCom=9}}
    if(cOMPUTER==5){
        if(numOfcol==1){img3.src=fourC5[0]; scoreCom=10} 
        else if(numOfcol==2){img3.src=fourC5[1]; scoreCom=10} 
        else if(numOfcol==3){img3.src=fourC5[2]; scoreCom=10} 
        else if(numOfcol==4){img3.src=fourC5[3]; scoreCom=10}}
    if(cOMPUTER==6){
        if(numOfcol==1){img3.src=fourC6[0]; scoreCom=2} 
        else if(numOfcol==2){img3.src=fourC6[1]; scoreCom=2} 
        else if(numOfcol==3){img3.src=fourC6[2]; scoreCom=2} 
        else if(numOfcol==4){img3.src=fourC6[3]; scoreCom=2}}
    if(cOMPUTER==7){
        if(numOfcol==1){img3.src=fourC7[0]; scoreCom=3} 
        else if(numOfcol==2){img3.src=fourC7[1]; scoreCom=3} 
        else if(numOfcol==3){img3.src=fourC7[2]; scoreCom=3} 
        else if(numOfcol==4){img3.src=fourC7[3]; scoreCom=3}}
    if(cOMPUTER==8){
        if(numOfcol==1){img3.src=fourC8[0]; scoreCom=4} 
        else if(numOfcol==2){img3.src=fourC8[1]; scoreCom=4} 
        else if(numOfcol==3){img3.src=fourC8[2]; scoreCom=4} 
        else if(numOfcol==4){img3.src=fourC8[3]; scoreCom=4}}
    if(cOMPUTER==9){
        if(numOfcol==1){img3.src=fourC9[0]; scoreCom=11} 
        else if(numOfcol==2){img3.src=fourC9[1]; scoreCom=11} 
        else if(numOfcol==3){img3.src=fourC9[2]; scoreCom=11} 
        else if(numOfcol==4){img3.src=fourC9[3]; scoreCom=11}}
    let arr1=[td11,td21,td31];
    let arr2=[td13,td23,td33];
    arr1[count].textContent=scoreU;
    arr2[count].textContent=scoreCom;
    
    if (scoreU>scoreCom){ 
        arr1[count].style.color="green";
        arr2[count].style.color="red";
    } else if (scoreU<scoreCom){
        arr2[count].style.color="green";
        arr1[count].style.color="red";
    } else {
        arr1[count].style.color="red";
        arr2[count].style.color="red";
    }
    if(count<3){
    totalUser=totalUser*1+parseInt(scoreU);
    totalCom=totalCom*1+parseInt(scoreCom);
    count++;
    }
    if(count==3){
        if (totalUser>totalCom){
            p2.innerHTML="<strong>"+UserName+"</strong> WIN!";
        } else if (totalUser<totalCom){
            p2.innerHTML="<strong>"+"Computer"+"</strong> WIN!"
        } else {
            p2.innerHTML="<strong>Draw</strong>"
        }
    }
    td41.textContent=totalUser;
    td43.textContent=totalCom;
});
but2.addEventListener('click',()=>{
count=0;
p2.textContent="Press Start";
let arr1=[td11,td21,td31];
let arr2=[td13,td23,td33];
for(let i=0;i<3;i++){
arr1[i].textContent="";
arr2[i].textContent="";
td41.textContent="";
td43.textContent="";
totalUser=0;
totalCom=0;
img1.src="img/back.png"
img3.src="img/back.png"
}
});
var knopka = document.getElementById("stik");
knopka.addEventListener('click',()=>{
 document.location='index.html'
});