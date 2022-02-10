/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

console.log("Hello World");

const MyCourse = "DS4200"
console.log(MyCourse);


//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {

    let myRand = Math.random()

    let buttonDiv = document.getElementById("random_num")

    buttonDiv.innerHTML = myRand

    console.log("Button 1 was clicked"); 
}

function change() { 
  document.getElementById('dayereh').style.fill = "red";
} 

// calling the function

// printButtom1Clicked();