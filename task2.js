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

// console.log("TASK 2")





// function checkPythagoras (x, y, z){
//     if(x^2 + y^2 === z^2 ){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }



// checkPythagoras(3, 4, 9);


