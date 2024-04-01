

const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11];

console.log(`===========Total length available===============`);
console.log(arrayNumber.length);

console.log(`=========Step 2============`);
let length = arrayNumber.length;
console.log(`First Element in Array : ${arrayNumber[0]}`);
console.log(`Last Element in Array : ${arrayNumber[length-1]}`);

console.log(`============Step 3================`);

console.log(`Third last Element in array:${arrayNumber[length-3]}`);

console.log(`=======Step 4  Even No=========`);
for (const index of arrayNumber) {
    if (index%2 == 0) {
        console.log(index);
    }
}

console.log(`=======Step 5 odd No=========`);
for (const index of arrayNumber) {
    if (index%2 != 0) {
        console.log(index);
    }
}

console.log(`=======Step 6 Sum Of Even numbers=========`);
let sumEven=0;
for (const number in arrayNumber) {
    if (number%2==0) {
        sumEven=sumEven+arrayNumber[number]
    }
}
console.log(` Sum of all even positioned elements :${sumEven}`);

console.log(`=========Step 7 Sum of odd Number============`);
let sumOdd=0;
for (const number in arrayNumber) {
    if (number%2!=0) {
        sumOdd=sumOdd+arrayNumber[number]
    }
}
    console.log(`  Sum of all positioned Odd elements :${sumOdd}`);

    console.log(`=========Step 8 Sum of array Number============`);
    
let sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];  
    sum = sum + element;
}
    console.log(` Sum of an array is: ${sum}`);

console.log(` =====Step 9 No. which is multiple of 5====`);
for (const index of arrayNumber) {
    if (index%5==0) {
        console.log(index);
        
    }
    
}

console.log(`=======Step 10=======`);
console.log(`No 115 is Available:${arrayNumber.includes(115)}`);

console.log(`No 23 is Available:${arrayNumber.includes(23)}`);

console.log(`======Step 11========`);
let insertNumber = arrayNumber.splice(3,0,55,66);
console.log(arrayNumber);

console.log(`=======Step 12==========`);
let deleteNumber = arrayNumber.splice(4,3);
console.log(arrayNumber);




