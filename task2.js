// //  ------------------   Task 1

// console.log("TASK 1")


const sampleObject = {
    isItarable : false ,
    sampleArray : [12,63,21,34,98,57]
}





function task1(){
    if(typeof(sampleObject.isItarable) == 'boolean'){
        for (i= 0; i <sampleObject.sampleArray.length; i++)
        console.log(sampleObject.sampleArray[i]);
        
    }else{
        console.log("provided array isn't itarable");
    }
    
}




task1();




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






//  ------------------   Task 3

console.log("TASK 3")


















//  ------------------   Task 4

console.log("TASK 4")



function checkDeg(x){
    if(x > 0 && x <= 90){
        console.log("Acute angle: An angle between 0 and 90 degrees.")
    }else if(x == 90){
        console.log("Right angle: An 90 degree angle.")
    }else if(x > 90 && x <= 180){
        console.log("Obtuse angle: An angle between 90 and 180 degrees.")
    }else if(x == 180){
        console.log("Straight angle: A 180 degree angle.")
    }
    
}


checkDeg(154);