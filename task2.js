// //  ------------------   Task 1

// console.log("TASK 1")


const sampleObject = {
    isItarable : false ,
    sampleArray : [12,63,21,34,98,57]
};





function task1(x){
    if(typeof x.isItarable == 'boolean'){
        for (i= 0; i <sampleObject.sampleArray.length; i++)
        console.log(sampleObject.sampleArray[i]);
        
    }else{
        console.log("provided array isn't itarable");
    }
    
}




task1(sampleObject);








//  ------------------   Task 2

console.log("TASK 2")





function checkPythagoras (x, y, z){
    if(x**2 + y**2 === z**2 ){
        console.log(true)
    }else{
        console.log(false)
    }
}



checkPythagoras(3, 4, 5);

checkPythagoras(6, 3, 8)




//  ------------------   Task 3

console.log("TASK 3")

// numbersArray = [2,14,25,75,11,6];



function minMax(x){
    let minValue = Math.min(...x);
    let maxValue = Math.max(...x);
    console.log(`Min value is ${minValue} and Max value is ${maxValue}`);
}






minMax([2,14,25,75,11,6]);







//  ------------------   Task 4

console.log("TASK 4")



function checkDeg(x){
    if(x  < 0 || x > 180){
        console.log("Please choose number between 0 and 180")
    }else if(x > 0 && x < 90){
        console.log("Acute angle: An angle between 0 and 90 degrees.")
    }else if(x == 90){
        console.log("Right angle: An 90 degree angle.")
    }else if(x > 90 && x < 180){
        console.log("Obtuse angle: An angle between 90 and 180 degrees.")
    }else {
        console.log("Straight angle: A 180 degree angle.")
    
    }
    
}


checkDeg(-21);
checkDeg(181);
checkDeg(154);
checkDeg(90);
checkDeg(56);
checkDeg(180);






//  ------------------   Task 5

// console.log("TASK 5")




// const students = [{name: "Gio", grade: 75,}, {name: "Shio", grade: 96,}, {name: "Rio", grade: 65,}, { name: "Jio", grade: 41,}, {name: "Pio", grade: 53,}]


// function checkStundentGrade(){
//     for(){
//         if(students.grade >= 81){
//             students.finalResult = "A";
        
//     }else if(students.grade >= 71){
//         students.finalResult = "C";
    
//     }else if(students.grade >= 61 ){
//         students.finalResult = "D";
    
//     }else if(students.grade >= 51){
//         students.finalResult = "E";
    
//     }else{
//         students.finalResult = "F";
//     }
//     }
 

// return students;

// }


// students = checkStundentGrade(students);
// console.log(students);


