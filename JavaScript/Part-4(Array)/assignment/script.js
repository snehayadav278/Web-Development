// Qs1. Write a JavaScript program to get the first n elements of an array.[n can be any positive number].
// For example: for array [7,9,0,-2] and n = 3
// Print,[7,9,0]
let array1 = [7 , 9, 0 , -2]
console.log(array1.slice(0,3));


// Qs2. Write a JavaScript program to get the last n elements of an array.[n can be any positive number].
// For example :  for array [7,9,0,-2] and n = 3
// Print , [9,0,-2]
let array2 = [7, 9, 0 , 2];
console.log(array2.slice(array2.length-3));


// Qs3. Write a JavaScript program to check whether a string is blank or not . 
let str = "I Love Coding";
if(str.length == 0){
    console.log("blank string");
}
else{
    console.log("not a blank string");
}


//Qs4. Write a JavaScript program to test whether the character at the given (character) index is lowercase .
let name = "SnEhA yAdAv" ;
if(name[2] == name[2].toLowerCase()){
    console.log("Yes");
}
else{
    console.log("No");
}


//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let string = "    hello ! how are you ?    ";
console.log(string.trim());


//Write a JavaScript p0rogram to check if an element exists in an array or not .
let cars = [ "bmw" , "ferrari" , "toyota" , "xuv"];
console.log(cars.includes("bmw"));
console.log(cars.includes("audi"));
