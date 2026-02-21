//array methods 

//forEach()
let arr = [1,2,3,4,5];
let print= function(el){
    console.log(el);
};
arr.forEach(print);

let arr1=[{
    name: "aman",
    marks: 95,
},{
    name : "shradha",
    marks : 94.4,
}, {
    name : "rajat",
    marks : 92,
},
];
arr1.forEach((student)=> {
    console.log(student.marks);
})

//map function
let num = [ 1,2,3,4];
let double = num.map((el) =>{
    return el*2;
});
console.log(double);

let gpa = arr1.map((el) => {
    return el.marks / 10;
});
console.log(gpa);

//filter function
let nums = [ 1,2,3,4,5,6,7,8,20,11,10];
let ans = nums.filter((el) => {
    return el%2 == 0;
});
console.log(ans);

//every method (returns true or false)
let evry = [2,4,6].every((el) =>
    el%2 == 0
);
console.log(evry);

//some method
//returns true if some elements of array give true for some fucntion. else returns false.
//arr.some(some fucntion defintion or name);

//reduce method
//(reduces the array to a single value)
//arr.reduce(reducer function with 2 variables for (accumulator , element))
let num1 = [ 1, 2, 3 , 4];
let finalVal = num1.reduce((res , el ) => res + el);
console.log(finalVal);

//finding maximum in an array
//using loop
let arr2 = [ 1 , 3, 5, 29, 7, 20, 47, 2];
let max = -1;
for (let i = 0 ; i< arr2.length ; i++){
    if(max < arr2[i]){
        max = arr2[i];
    }
}
console.log(max); 

//using reduce
let max1 = arr2.reduce((max , el) => {
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(max);

//default parameters
//giving a default value to the arguments
function sum(a,b=5){
    return a+b;
}
console.log(sum(1,2));
console.log(sum(3));

//spread
//expands an iterable into multiple value
//strings, arrays , etc are iterable
let arr3 = [1,2,3,4,5];
console.log(arr3);
console.log(...arr3);
console.log("apnacollege");
console.log(..."apnacollege");

//spread(with array literal)
let arr4 = [ 1 , 2 , 3 , 4];
let newArr = [...arr4];
console.log(newArr);

let chars = [..."hello"];
console.log(chars);

let odd = [ 1 , 3, 5, 7, 9];
let even = [ 2, 4, 6, 8, 0];
let result = [...odd , ...even];
console.log(result);

//spread (with object literals)
let data ={
    email : "ironman@gmail.com",
    password : "abc12",
};
 let dataCopy = {...data , id : 123 , country : "India"};
 console.log(dataCopy);

 //rest
 //allows a function to take an indefinite number of arguments and bundle them in an array
 

 //destructuring
 //storing values of array into multiple variables
 let names = ["tony" , "bruvce" , "peter" , "steve" , "abc" , "xyz" , "pyq"];
 let [winner , runnerup , secondRunnerup] = names ;
 console.log(winner , runnerup );

 //destructuring(for objects)
 const student = {
    name : "karan",
    age: 14,
    class : 9,
    subjects : ["hindi" , "english" , "maths" , "science"],
    username : "karan@123",
    password : "abcd",
 }
let {username , password} = student;
console.log(username , password);
let{username : user , password : secret , city = "mumbai"} = student ;
console.log(user , secret);
console.log(city);