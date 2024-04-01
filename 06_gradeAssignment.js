



var gradeCalculation = function (marks) {
    if (marks >= 90 && marks<100) {
        console.log(`Fantastic marks : ${marks} ,Your Grade is: A+` );
        
    } else if (marks>=75 && marks<90) {
        console.log(`Excellent Marks : ${marks},Your Grade is:A`);
        
    } else if (marks>=50 && marks< 75) {
        console.log(`Good MArks : ${marks},Your Grade is :B`);
    } else if (marks>=35 && marks < 50) {
        console.log(`MArks is : ${marks},Need Improvement`);
        
    }else if (marks==null || marks<=0 || isNaN(+marks) || marks>100) {
        console.log(`Invalid input : ${marks}`);
    } else {
        console.log(`Valid Input :${marks}`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);
