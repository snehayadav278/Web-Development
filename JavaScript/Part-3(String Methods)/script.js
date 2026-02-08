//trim
let msg = "     hello";
console.log(msg.trim());

// let password=prompt("set your password");
// console.log(password.trim());

//str.toUpperCase() , str.toLowerCase()
let str1 = "Sneha Yadav";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

//string method with arguments
 //indexOf (return first occurence of some value)
 let str2 = "ILoveCoding" ;
 console.log(str2.indexOf("Love"));
 console.log(str2.indexOf("l"));
 console.log(str2.indexOf("o"));

 //method chaining
 let str3 = "     Hello";
 let res =  str3.trim().toUpperCase();
 console.log(res);

 //slice   str.slice(start_index,end_index+1)
let str4 = "apnacollege" 
console.log(str4.slice(0,4));
console.log(str4.slice(4));
console.log(str4.slice(-3));  //-num = length-num

//replace
let str5 = "IloveCoding";
console.log(str5.replace("love","do"));
console.log(str5.replace("o","x"));
console.log(str5);

//repeat
let str6 = "Mango";
console.log(str6.repeat(3));