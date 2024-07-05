
// document.getElementById("myH1").textContent=`Hello`

//variable
// let age=25;
// let price=10.99;
// let gpa=2.1;
// console.log(typeof gpa);
// console.log()
// let firstName="hey";
// let email="Hey@gmail.com"
// console.log(typeof firstName);
// console.log(`your email is ${email}`)
// console.log(`Your name is ${firstName}`);


// let fullName = " HEY";
// let age = 25;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = isStudent;

// // ARITHMATIC OPERATORS

// let students = 30;


// students = students + 1;
// students = students - 1;
// students = students * 1;
// students = students / 1;
// students = students ** 1;

// let extraStudents = students % 3

// students += 1

// students -= 1

// students /= 1

// students *= 1

// students **= 1

// students %= 1
// students++
// students--
// console.log(students)

// let result = 1 + 2 * 3 + 4 ** 2;
// console.log(result);

//TO ACCEPT USER INPUT
//easy way
// let username;

// username=window.prompt("Whats your username?")
// console.log(username)

// let username;

//  document.getElementById("mySubmit").onclick=function(){
//     username=document.getElementById("myText").value
//  }


// TYPE CONVERSION
// let age = window.prompt("How old are you?")
// age = Number(age);
// age += 1;
// console.log(age, typeof age);
// let x=12;
// let y="abc";
// let z=true

// z=Number(z)
// x=String(x)
// y=Boolean(y)

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

//CONSTANTS
// const PI = 3.14159
// let radius;
// let circumference;
// radius = window.prompt('Enter the radius of a circle');

// console.log(circumference);

// document.getElementById("mySubmit").onclick = function () {
//     radius = document.getElementById("myText").vlaue;
//     radius = Number(radius);
//     circumference = 2 * PI4 * radius;
//     document.getElementById("myH3").textContent = circumference + "cm"
// }

//MATH
// let x=3.21;
// let y=2;
// let z= undefined;

// z=Math.round(x);
// z=Math.floor(x);
// z=Math.ceil(x);
// z=Math.trunc(x);
// z=Math.pow(x,y);
// z=Math.sqrt(x);
// z=Math.log(x);
// z=Math.sin(x);
// z=Math.cos(x);
// z=Math.tan(x);
// z=Math.abs(x);
// z=Math.sign(x);
// let max=Math.max(x,y,z);
// let min=Math.min(x,y,z);

// console.log(max)

//IF STATEMENTS
// let age=25;
// if (age>=18){
//     console.log("You are old enough to enter this site");
// }
// else{
//      console.log("You must b 18+ to enter this site");
// }

// let time=9;
// if (time<12){
//     console.log("Good morning!")
// }
// else{
//     console.log("Good afternoon!")
// }

// let age=25;
// let hasLicense=false;

// if(age>=18){
//     console.log("You are old enough to drive!");

//     if(hasLicense){
//         console.log("You have your license!")
//     }
//     else{
//         console.log("You do not have your license yet!")
//     }
// }
// else{
//     console.log("You must be 18+ to have a license");
// }


// const myText=document.getElementById("myText");
// const mySubmit=document.getElementById("mySubmit");
// const resultElement=document.getElementById("resultElement");


// let age;

// mySubmit.onclick=function(){
//     age=myText.value;
//     age=Number(age);
//     if(age>=18){
//          resultElement.textContent=`You are old enough to enter this`
//     }
//     else if(age<0){
//         resultElement.textContent=`Your age can't be below 0`
//     }
//     else if(age>=100){
//         resultElement.textContent=`You are too old to enter this site`
//     }
//     else{
//         resultElement.textContent=`You must be 18+ to enter this site`
//     }
// }

//CHECKED

// const myCheckBox=document.getElementById("myCheckBox");
// const visaBtn=document.getElementById("visaBtn");
// const masterCardBtn=document.getElementById("masterCardBtn");
// const paypalBtn=document.getElementById("paypalBtn");
// const mySubmit=document.getElementById("mySubmit");
// const subResult=document.getElementById("subResult");
// const paymentResult=document.getElementById("paymentResult");
// mySubmit.onclick=function(){

//     if(myCheckBox.checked){
//         subResult.textContent=`You are subscribed`;
//     }
//     else{
//         subResult.textContent=`You are not subscribed`;
//     }
//     if(visaBtn.checked){
//         paymentResult.textContent=`You are paying with Visa`;

//     }
//     else if(masterCardBtn.checked){
//         paymentResult.textContent=`You are paying with MasterCard`;

//     }
//     else if(paypalBtn.checked){
//         paymentResult.textContent=`You are paying with PayPal`;

//     }
//     else{
//         paymentResult.textContent=`You must select a payment type`;
//     }
// }


//TERNARY OPERATOR


// let age=21;
// let message=age>=18?"You're an adult" : "You're a minor"
// console.log(message);

// let time=16;
// let greeting = time<12?"Good Morning!":"Good Afternoon";
// console.log(greeting)

// let isStudent=true;
// let message=isStudent?"You are a Student":"You are Not a Student";
// console.log(message);

// SWITCH

// let day=1;
// switch(day){
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is tuesday");
//         break;
//     case 3:
//             console.log("It is tuesday");
//             break;
//     case 4:
//         console.log("It is tuesday");
//         break;
//     case 5:
//             console.log("It is tuesday");
//             break;
//     default:
//         console.log(`${day} is not a day`);
// }

// let testScore=92;
// let letterGrade;

// switch(true){
//     case testScore>=90:
//        letterGrade="A"
//        break;
//     case testScore>=80:
//         letterGrade="B"
//         break;
//     default:
//         letterGrade="F"
// }
// console.log(letterGrade);

// STRING METHODS
// let userName="BRO"
// userName=userName.trim();
// userName=userName.toUpperCase();
// userName=userName.toLowerCase();
// console.log(userName);
// let result=userName.startsWith(" ");
// console.log(result);
// if(result){
//     console.log("Your username cant begin with ' ' ");


// }
// else{
//     console.log(userName);
// }
// console.log(userName.charAt(0))
// console.log(userName.indexOf("O"))
// console.log(userName.lastIndexOf("O"))
// console.log(userName.length);


// let phoneNumber="123-456-7890";
// phoneNumber=phoneNumber.replaceAll("-","");
// console.log(phoneNumber);

// phoneNumber=phoneNumber.padStart(15,"0");
// phoneNumber=phoneNumber.padEnd(15,"0");
// console.log(phoneNumber);

// STRING SLICING
// const fullName="Raksha Thakur";
// let firstName=fullName.slice(0,6);
// let lastName=fullName.slice(7,);
// let firstChar=fullName.slice(0,1);
// let lastChar=fullName.slice(-1);
// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

// const email="hey@gmail.com";
// let userName=email.slice(0,email.indexOf("@"));
// let extension=email.slice(email.indexOf("@")+1);
// console.log(userName);
// console.log(extension);

// METHOD CHAINING
// let userName=window.prompt("Enter your username: ");
// No method chaining

// userName=userName.trim();
// let letter=userName.charAt(0);
// letter=letter.toUpperCase();
// let extraChars=userName.slice(1);
// extraChars=extraChars.toLowerCase();
// userName=letter+extraChars;
// console.log(userName);

// Method chaining

// userName=userName.trim().charAt(0).toUpperCase()+userName.trim().slice(1).toLowerCase();
// console.log(userName)

// LOGICAL OPERATORS

// const temp=20;
// if(temp>0 && temp<=30){
//     console.log("The weather is GOOD");
// }
// else{
//     console.log("The weather is bad");
// }

// if(temp<=0 || temp>30){
//         console.log("The weather is BAD");
//      }
//      else{
//        console.log("The weather is GOOD");
//      }

// const isSunny=true;
// if(!isSunny){
//     console.log("It is CLOUDY")
// }
// else{
//     console.log("It is SUNNY")
// }

// STRICT EQUALITY(===)

// const PI=3.14;
// if(PI===3.14){
//     console.log("That is pi");
// }
// else{
//     console.log("That is not pi");
// }


// while loop

// let userName="";
// while(userName===""){
//     userName=window.prompt(`Enter your name`);
// }
// console.log(`Hello ${userName}`)

// let loggedIn=false;
// let userName;
// let password;

// while(!loggedIn){
//     userName=window.prompt(`Enter your username`);
//     password=window.prompt(`Enter your password`);

//     if(userName==='myUsername' && password==='myPassord'){
//         loggedIn=true;
//         console.log("you are logged in!");

//     }
//     else{
//         console.log("Invalid credentials! Please try again");
//     }
// }

// FOR loop


// for(let i=10;i>=0;i--){
//   console.log(i);
// }
// console.log("Happy birthday!")

// for (let i =1;i<=20;i++){
//     if(i==13){
//         continue;
//     }
//     else{
//         console.log(i)
//     }
// }


