let userName='My name is Adel Aziza';
function myName(){
    document.getElementById('example1').innerHTML=userName;
}

function myChange(){
    document.getElementById('wordChange').innerHTML="My other name is Aziza Useni";

}

//Change images 
let myImage='/images/adel2.jpeg';

function changeImage1(){
    document.getElementById('img1').src=myImage;
}


function changeImage2(){
    document.getElementById('img1').src='/images/adel4.jpeg';
}

//Change Color
function changeColor(){
    document.getElementById('change').style.color='black';
}

//function alert
function alertResult(){
   window.alert(4+10);
}

//function write
function writeResult(){
    document.write(4+10);
}

//function print page using print object
function printPage(){
    window.print();
}

//trying mutiple declaration with one variable
var age=26, yearWeeding=2022, dreamVac='Paris And Dubai';

function whatMyDreamDay(){
    document.write(`Start with ${userName} my age is ${age}  in ${yearWeeding} I will be married  and I will go to ${dreamVac} `)
}
