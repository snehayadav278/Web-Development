let students = ["aman" , "shradha" , "rajat"];
console.log(students);
console.log(students[1]);
console.log(typeof students);

let empArr = [ ];
console.log(empArr);

let fruits = ["mango" , "apple" , "banana"]
fruits[0] = "litchi";
console.log(fruits);
fruits[10] = "pineapple";
console.log(fruits);
console.log(fruits.length);
console.log(fruits[5]);

//Array Methods

//push (add to end)
let cars = ["audi" ,"bmw" ,"suv" , "maruti" ];
console.log(cars)
cars.push("toyota");
console.log(cars);

//pop (delete fron end and returns it)
cars.pop();
console.log(cars);

//unshift(add to start)
cars.unshift("toyota");
console.log(cars);
cars.unshift("ferrari");
console.log(cars);

//shift (delete from start and returns it)
cars.shift();
console.log(cars);

//indexOf  (returns index of something)
console.log(cars.indexOf("suv"));

//includes  (search for a value)
console.log(cars.includes("bmw"));
console.log(cars.includes("defender"));

//concat (merge 2 arrays)
let primary = ["red" , "yellow" , "blue"];
let secondary =["orange" , "green ", "violet"];
let allColor = primary.concat(secondary)
console.log(allColor);


//reverse (reverse an array)
console.log(cars.reverse());

//slice (copies a portion of an array)
let colors = ["red" , "yellow" , "blue" , "orange" , "pink" , "white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));

//splice (removes/replaces/add elements in place)
//splice(start,deleteCount,item0...itemN)
console.log(colors.splice(4));
console.log(colors.splice(0,1));
console.log(colors);
colors.push("pink");
colors.push("white");
console.log(colors);
console.log(colors.splice(1 ,1 , "red"));
console.log(colors);

//sort (sorts an array)
console.log(colors.sort());
let marks = [99 , 89 , 67 , 42 , 100];
console.log(marks.sort());

//Array References (address in memory)
let arr = ['a' , 'b'];
let arrCopy = arr ;
console.log(arrCopy);
arrCopy.push('c');
console.log(arrCopy);
console.log(arr === arrCopy);

//constant array
const array = [1 ,2 , 3];
array.push(4);
console.log(array);

//nested array
let nums = [[2,4],[3,6],[4,8]];
console.log(nums);
console.log(nums[0]);
console.log(nums[0].length);
console.log(nums[1][0]);

//create a nested array to show the following tic-tae-toe game state
let game = [["X",null,"O"], [null , "X" , null],["O", null , "X"]];
console.log(game);




