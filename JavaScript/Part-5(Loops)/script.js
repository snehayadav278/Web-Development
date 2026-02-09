//loops

//for loop
console.log("for loop example 1 : ");
for(let i=1;i<=5;i++){
    console.log(i);
}

console.log("for loop example 2 : ");
for(let i=5;i>=1;i--){
    console.log(i);
}

//print all odd numbers from 1 to 15
console.log("odd numbers are :");
for(let i=1;i<=15;i=i+2){
        console.log(i);
}

//print all even numbers from 2 to 10
console.log("even numbers are : ");
for(let i=2;i<=10;i=i+2){
    console.log(i);
}

//infinite loops
// for(let i=1;i>=0;i++){
// }
// for(let i=1;i<=15;i--){
// }
// for(let i=1; ;i++){
// }

//print the multiplication table for 5
console.log("table of 5 is :");
for(let i=1; i<=10; i++){
    console.log(i*5);
}

//nested for loop
for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`);
    for(let j=1 ; j<=3 ; j++){
        console.log(j);
    }
}

//while loop
console.log("while loop example : ");
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

//favourite movie
// let favMovie = "avatar";
// let guess = prompt ("guess my favourite movie : ");

// while((guess != favMovie)){
//     if(guess == "quit"){
//         console.log("you quit !");
//         break;
//     }
//     guess = prompt ("guess my favourite movie : ");

// }
// if(guess == favMovie){
//     console.log("congrats !! you guess it right ...");
// }

//break keyword
console.log("break keyword example: ");
let i1=1;
while(i1<=5){
    if(i1==3){
        break;
    }
    console.log(i1);
    i1++;
}


//for of loop
let fruits = [ "mango" , "apple" , "banana" , "litchi" , "orange"];
for(fruit of fruits){
    console.log(fruit);
}

for(char of "apnacollege"){
    console.log(char);
}

//nested for of loop
let heroes = [ ["ironman", "spiderman" , "thor"] ,
             ["superman", "wonder women" , "flash"]
            ];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}