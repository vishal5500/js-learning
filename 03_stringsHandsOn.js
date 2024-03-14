

console.log(`====================Step 1====================`);

function stringHandsOn(){
    var sentences = "   Hey you are doing good, keep it up   ";
    console.log(`Given String is :- ${sentences}`);

    console.log(`====================Step 2====================`);
    
    var length = sentences.length
    

    console.log(`The Total Length Of given string is: ${length}`);

    console.log(`====================Step 3====================`);
    
    var trimLength = sentences.trim()
    console.log(`The Value of using Trim is: ${trimLength}`);
    var afterTrimLength = trimLength.length
    console.log(`After trim The total length is : ${afterTrimLength}`);

    console.log(`====================Step 4====================`);

    console.log(`Removed Spaces it will be: ${length-afterTrimLength}`);

    console.log(`====================Step 5====================`);

    var firstChar = trimLength.charAt(0)
    var lastChar = trimLength.charAt(afterTrimLength-1)
    console.log(`First Char Is: ${firstChar} and Last Char is: ${lastChar}`);

    console.log(`====================Step 6====================`);
    var count = trimLength.split(" ")                       //in bracket there is one space 
    var totalCount = count.length
    console.log(`Total no of count after Trim is: ${totalCount}`);

    console.log(`====================Step 7====================`);
     var indexof = trimLength.indexOf(`good`);
     console.log(`Index of good is:- ${indexof}`);

     
    console.log(`====================Step 8====================`);
    var subString = trimLength.substring(22)
    console.log(`SubSTring Value Start At:${subString}`);

    console.log(`====================Step 9====================`);
    console.log("CHECk the value:",trimLength.endsWith("up")); 

    console.log(`====================Step 10====================`);
    console.log("CHECk the value:",trimLength.startsWith("Hey"));

    

    
    
    


}
stringHandsOn();





