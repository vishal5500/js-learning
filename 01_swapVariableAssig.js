var sweety="Sweety";
var cutie="Cutie";   
var temp=sweety;
sweety=cutie;
cutie=temp;
console.log("Sweety:", sweety,"Cutie:", cutie);


console.log("=========== Before==========");
var num1=100;
var num2=200;
var num3=300;
console.log("Num1:",num1,"Num2:",num2,"Num3:",num3);
console.log("============After==========");
var temp=num1
num1=num3;
num3=temp;
console.log("Num1:",num1,"Num2:",num2,"Num3:",num3);