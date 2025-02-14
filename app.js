// console.log(document.getElementById("username"));
// console.log(document.getElementById("password"));
// console.log(document.getElementById("age"));
// console.log(document.getElementById("submit-btn"));

// document.getElementById("submit-btn").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent form submission

//     let userName = document.getElementById("username").value;
//     let userPassword = document.getElementById("password").value;
//     let userAge = document.getElementById("age").value;

//     if(userAge>18){
//         console.log("You are eligible");
//     }
//     else{
//         console.log("You are not eligible");
//     }


//     switch(userAge){
//         case 18:
//             console.log("You are 18 years old!")
//             break;
//          case 19:
//             console.log("You are 19 years old!")
//             break;    
//     }



//     alert("Successfully Submited");

//     console.log(userName);
//     console.log(userPassword);
//     console.log(userAge);
// });


// const customers = [
//     {
//         name:"Kamal",
//         age:10,
//         address:"Kegalle"
//     },
//     {
//         name:"Nimal",
//         age:20,
//         address:"Kandy"
//     },
//     {
//         name:"Sunil",
//         age:30,
//         address:"Matara"
//     }
// ]

// console.log(customers); 

// console.log(customers[1].name);


function cal(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("btn");

    let result = num1 + num2;

    document.getElementById("result").innerHTML = "Result : " + result;
}


//Second method
// function change(){
//     let num1 = parseFloat(document.getElementById("num1").value);
    
//     document.getElementById("num1").value = "";
//     document.getElementById("num1").placeholder = "Enter the second digit";
//     document.getElementById("btn2").setAttribute("onclick", "calculate(" + num1 + ")"); 
//     document.getElementById("btn2").innerHTML = "Add";
// }

// function calculate(num1) {
//     let num2 = parseFloat(document.getElementById("num1").value);

//     if (isNaN(num2)) {
//         document.getElementById("result").innerHTML = "Please enter a valid second number!";
//         return;
//     }

//     let result = num1 + num2;
//     document.getElementById("result").innerHTML = "Result: " + result;

//     // Reset button and input field
//     document.getElementById("num1").value = "";
//     document.getElementById("num1").placeholder = "Enter the first digit";
//     document.getElementById("btn2").setAttribute("onclick", "change()");
//     document.getElementById("btn2").innerHTML = "Enter";
// }