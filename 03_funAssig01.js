console.log("=====No Argu and no Return===============");

function places(){
    console.log("Recentlly visited:");
}
places();

function myFavMovie(){
    console.log("Favourite Movie is:");
}
myFavMovie();

console.log("======Step 2========================");
function personalDetails(firstName,lastName,collegeName){
   console.log("My First Name :",firstName);
   console.log("My Last Name:",lastName);
   console.log("Collage Name:",collegeName);


    }
    personalDetails("Vishal","Gurav","FIT Pune");

    console.log("====Step 3======================");
function swapValues(argu1,argu2){
    console.log("before Swap:",argu1, argu2);
    var temp=argu1
    argu1=argu2;
    argu2=temp;
    console.log("After Swap:",argu1,argu2);

}
swapValues("Virat","Anushka")
swapValues(1000,2000)


console.log("==========step 4================");

function addThreeValue(n1,n2,n3){
    var addition=n1+n2+n3;
    console.log("Addition:",addition);
}
addThreeValue(10.23,600,40)
addThreeValue("HELLO"," GOOD"," MORNING")