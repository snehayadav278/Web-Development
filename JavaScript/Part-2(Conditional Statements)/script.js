//conditional statements

//if statement
let age1=23;
if(age1>=18){
    console.log("you can vote");
}
if(age1>20){
    console.log("you are in your 20's");
}

//create a traffic light system that shows what to do based on color
let color = "red" ;
if(color == "red"){
    console.log("Stop! light color is red .");
}
if(color == "yellow"){
    console.log("slow down , light color is yellow . ");
}
if(color == "green"){
    console.log("go , light color is green .");
}

//else if statement
let marks = 75;
if(marks >= 80){
    console.log("A+");
}
else if(marks >= 60){
    console.log("A");
}
else if(marks >= 33){
    console.log("B");
}
else if(marks < 33){
    console.log("F");
}

//else statement
let clr = "blue";
if(clr == "red"){
    console.log("stop");
}
else if (clr == "yellow"){
    console.log("slow down");
}
else if (clr == "green"){
    console.log("go");
}
else{
    console.log("traffic light is broken");
}

//calculate a system to calculate popcorn prices based on the size customer asked for :
let size = "M";
if(size == "XL"){
    console.log("Price is Rs. 250 ");
}
else if(size == "L"){
    console.log("Price is Rs. 200 ");
}
else if(size == "M"){
    console.log("Price is Rs. 100");
}
else if(size == "S"){
    console.log("Price is Rs. 50");
}
else{
    console.log("choose approproiate size . ");
}

//nested if-else
let percentage = 45 ;
if(percentage >= 33){
    console.log("Pass");
    if(percentage >= 80){
        console.log("Grade : O");
    }
    else{
        console.log("Grade : A");
    }
}
else{
    console.log("Better luck next time !");
}

//ques . A good string is a string that starts with the letter 'a' and has length > 3 . write a program to find whether a string is good or not .
let string = "apple";
if(string[0]=="a" && string.length > 3){
    console.log("Good string");
}
else{
    console.log("not good string");
}

//switch statement
let colour = "red";

switch(colour){
    case "red":
        console.log("stop");
        break;
    case "yellow" :
        console.log("slow down");
        break;
    case "green" :
        console.log("go");
        break;
    default :
    console.log("light is broken");
}

//use switch statement to print the day of the week using a number variable 'day with values 1 to 7.
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default :
        console.log("wrong day !");
}


//alert and prompt
//alert displays an alert message on the page
//prompt displays a dialog box that asks user for some input

// alert("something is wrong");

console.log("this is a simple log");
console.error("this is an error message");
console.warn("this is a warning msg");

// let firstName = prompt("enter your name :");
// console.log(firstName);
