
// console.log('Hello World from script.js file....')


// console.log(5+5)
// console.error('this is console error')

// alert('How are you all?')

// prompt("Enter value of x:");
// console.log('after prompt')

// var x = 10;
// console.log("x: ", x)

// var y = 100;
// console.log("y: ", y)

// let a = 111;
// console.log("a: ", a)

// const b = 999;
// console.log("b: ", b)

// var x = 12;      //declaration
// // var x = 14;      //re-declaration
// x = 15;          //re-assignment

// console.log("x: ", x)

// let y = 100;
// // let y = 111;   //redeclration
// y = 101;  //reassignment

// console.log("y: ", y)

// const z = 111;
// // const z = 222;     //redelcaration
// z = 777;              //re-assignment

// console.log('z: ', z)

// var x = prompt('Enter value of x');
// let x = prompt('Enter value of x');
// const x = prompt('Enter value of x');
// console.log("x: ", x)


// let employee = {
//     fname: "Onkar",
//     lname: "Bhawar",
//     age:25,
//     gender: 'male'
// }
// console.log("fname: ", employee.fname)
// console.log("lname: ", employee.lname)


// let arr = ['Onkar',11 ,  'Sham', 'Aditya']
// console.log(arr[1])

// function greet(){
//     console.log('inside greet fn......')

//     let x = 100;
//     console.log(x)
// }


// greet()
// greet()
// greet()
// greet()

// let x = [11, 22, 33, 44, 55];
// 0   1   2   3    4
//  let x = {
//     0: 11,
//     1: 22,
//     2: 33,
//     3: 44,
//     4: 55
//  }
// console.log(typeof(x))



// let y = {
//     fname:"onkar",
//     lnmae:"bhawar"
// }
// console.log(typeof(y))



// function greet(){
//     return ('inside greet')
// }

// console.log(greet())



// let x = 2;
// console.log(x**4)    //x*x*x*x

// let y = 20;
// console.log(y/3)     //6
// console.log(y%7)     //6



// let x = 10;
// console.log(++x)   //pre increment
// console.log(x++)   //post increment
// console.log(x)

// let y = 100;

// console.log(--y)  //pre decrement
// console.log(y--)  //post decrement
// console.log(y)

// function add(){
//         console.log('add fn called...')
//         console.log('add fn called...')
//         console.log('add fn called...')
//         console.log('add fn called...')
//         console.log('add fn called...')
//         console.log('add fn called...')
//         console.log('add fn called...')

//         return 'add fn executed';
// }


// let x = 10
// let y = 7
// let z = x += y    //x = x + y
// x -= y      //x = x - y
// x *= y       //x = x*y
// y -= x     //y = y-x
// console.log(y)


// let x = 100;
// let y = 100;

// console.log(x <= y)

// ==      checks only the value
// ===     checks the value as well as data type



//ternary operator (conditional opr )

// ( part1 )  ?  ( part2 )  :  ( part3 )
//    condn         true        false

// let x = 100
// var y = 10

// console.log('start')
// x == y ? console.log('equal') : console.log('not equal')
// console.log('end')

// let x = 'Onkar'
// let y = "Bhawar"

// console.log(x + " " + y)
// let fullName = x + "  " + y
// console.log(fullName)

// let str1 = "Good Morning"
// let str2 = " How are you all !"

// // console.log(str1 + '   ' + str2)
// str1 += str2   //str1 = str1 + str2 //str1 = "Good Morning How are you all"
// console.log(str1)

//LOGICAL OPERATORS
//logical AND &&
// let x = 10
// let y = 30

// console.log( x<20 && y>10 );
// console.log( x==20 && y==30 );
// console.log( x==10 && y==20 );
// console.log( x==100 && y==300 );

//logical OR ||

// let x = 10
// let y = 30

// console.log( x==10 || y==30 );
// console.log( x==10 || y==10 );
// console.log( x==100 || y==30 );
// console.log( x==100 || y==10 );

//logical NOT !

// let x = 0
// let y = 20
// // console.log(!(x==y));
// console.log(!x);




// let x = 20;
// if (x == 10) {
//         console.log('x is 10')
// } else {
//         console.log('x is not 10')
// }
// if(x>=10){

//         if(x==20){

//         }
// }

// x==10 ? console.log('true part') : console.log('false part')
// u will use ternary opr

// let x = 10
// if(x==10){
//         console.log('x is 10')
// }
// then u wil use LOGICAL AND &&

// x!=10 && console.log('x is 10......')


//STRINGS

// let fname = "          Onkar           "
// let lname = 'Bhawar.bhawar'
// let fullName = `My name is ${fname} ${lname}. I am a MERN Stack Dev. I love coding in JS. I ahve expertise in Frontend development.`

// console.log(fullName);
// console.log(fullName.length);
// console.log(fname.toUpperCase());
// console.log(lname.toLowerCase())
// console.log(fname.charAt(1))
// console.log(lname.indexOf('.'))

// console.log(lname.slice(0, 6))
// console.log(lname.replace('bhawar', 'Hello'))
// console.log(lname)
// let result = lname.split('.')
// console.log(result);

// console.log(fname.trim())
// console.log(lname.includes('bha'))



//ARRAYS

// let arr = [11, 22, 33, 44, 55, 66]
// console.log(arr.length)
// console.log(arr.push(999))
// console.log(arr.pop())
// console.log(arr.shift())
// console.log(arr.unshift('Onkar', 'Bhawar'))
// console.log(arr)


// //literal syntax
// let arr1 = [11, 22, 33, 44, 55]
// console.log("arr1 length: ", arr1.length)

// //constructor array
// let arr2 = new Array(99, "88", 77, 66)
// console.log("arr2 length: ", arr2.length)

//Array Methods

// let arr = [111, 222, 333, 444]

// push()
// arr.push(999, 888)
// console.log(arr)

//pop()
// console.log(arr.pop())
// console.log(arr)

//shift()
// console.log(arr.shift())
// console.log(arr)

//unshift()
// console.log(arr.unshift("Onkar"))
// console.log(arr)

// let arr1 = [111, 222, 333, 444, 555, 666, 777]
// let arr2 = ['Onkar', "Bhawar"]

//concat()
// let arr3 = arr1.concat(arr2)
// console.log(arr3)

//slice()
// console.log(arr1.slice(0, 3))

//splice()
// arr1.splice(0, 2)
// console.log(arr1)

// let arr1 = [111, 222, 333, 444, 555, 666, 777]
// forEach()

// arr1.forEach( (key) => {
//     return console.log(key*2)
// } )
// console.log(arr1)


// function add(itr){
//     console.log('add fn called...')
// }

// // //arrow fn
// const add = () => {
//         console.log('add fn called...')
// }

//MAP METHOD
// let arr1 = [111, 222, 333, 444, 555, 666, 777]

// const newArr = arr1.map((key)=> {
//    return key+1
// })

// console.log(newArr)


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newArr = arr.filter((key) => {
//     return key%2 != 0
// })

// console.log(newArr)

// let fruits = ['Mango', 'Apple', 'Banana', 'Pineapple', 'Grapes', 'Papaya']

// const newFruits = fruits.filter((i) => {
//     return i.length > 7
// })
// console.log(newFruits)

//FIND METHOD
// let fruits = ['Mango', 'Apple', 'Banana', 'Pineapple', 'Grapes', 'Papaya']

// const found = fruits.find((key) =>{
//     return key.startsWith('P')
// })
// console.log(found)

//REDUCE METHOD
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const result = arr.reduce((acc, key) => {
//     return acc + key
// }, 0)

// //first iteration
// // acc=0, key=1     acc = acc+key = 0+1 = 1

// //second iteration
// // acc=1, key=5     acc = acc+key = 1+5 = 6

// //third iteration
// // acc=6, key=6     acc = acc+key = 6+6 = 12


// console.log(result)

//INCLUDES METHOD

// let arr = [11, 22, 33, 44, 55]

// console.log(arr.includes(55))

// let arr = [3, 1, 2, 5, 4, 5, 5, 5]
// console.log(arr.sort())

// let arr = [1, 2, 7, 9, 3]
// arr.reverse()
// console.log(arr)

//FOR LOOP

// for(step1 ; step2 ; step4){
//     step3
// }

// for(initialization ; condition ; increment/decrement){
//     // logic
// }

// console.log('Start')
// for(let i=0 ; i<5 ; i++ ){   //1 2
//     console.log(i);        // 0  1  2  3  4
// }
// console.log('End')

// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99]

// for(let i=0 ; i<arr.length ; i++){
//     console.log(arr[i])
// }

// let arr = ['Mango', 'Apple', 'Banana', 'Pineapple']

// for(let i=0 ; i<arr.length ; i++){
//     console.log(arr[i])
// }


//WHILE LOOP

// step1
// while(step2){

//         step3

//         step4
// }


// initialization

// while(condition){
//         // logic to be executed multiple times


//     increment
// }

// console.log('Start')

// let i=0
// while(i<5){
//     console.log(i)


//     i++
// }

// console.log('End')

// let arr = [11, 22, 33, 44, 55, 66, 77]
// let arr = ['Mango', 'Oranges', 'Apple', 'Banana']

// let i=0
// while(i<arr.length){
//     console.log(arr[i])



//     i++
// }

//DO ...WHILE LOOP

// initialization

// do{
// //logic

// //increment
// }while(condition)
// console.log("Start")
// let i = 1

// do {
//     console.log(i)
//     console.log('do-while loop executed')

//     i++
// } while (i < 5)

// console.log("End")


// let employee = {
//     fname:"Onkar",
//     lname: "Bhawar",
//     profile: 'MERN Stack Dev',
//     age: 25,
//     gender: 'male'
// }

// console.log(employee)

// for(let key in employee){
//     console.log(key + ": " +employee[key])


// }


// let arr = [11, 22, 33, 44, 55]
// // console.log(arr);

// for(let key of arr){
//     if(key != 33){
//     console.log(key+ "...Onkar")
//     }
// }

// let str = 'Hello World'

// for(let char of str){
//     console.log(char)
// }


// let age = 12

// console.log('Start')

// if(age >= 18){
//     console.log('You are allowed to vote...')

//     console.log('step1: get your voter id')
//     console.log('step2: go to your polling booth')
//     console.log('step3: cast your vote')



// }

// console.log('End')



// let age = 27

// console.log("Start")

// if(age >= 18){
//     console.log('You are allowed to vote')
// } else{
//     console.log('You are not eligible to vote. Come after you are 18...')
// }

// console.log("End")



// let x = 30

// console.log("Start")     ///Start

// if(x == 1){
//     console.log('x is one')
// } else if(x == 2){
//     console.log('x is two')
// } else if(x == 3){
//     console.log('x is three')
// } else{
//     console.log('No value matched...')      // No value matched....
// }

// console.log("End")        ///End



//TERNARY OPERATOR

// let age = 8

// if(age >= 18){
//     console.log('You are an adult.');    
// } else{
//     console.log('You are a Minor.')
// }

// let age = 2

// age >= 18 ? console.log('You are an adult.') : console.log('You are a Minor.')


//BREAK 

// console.log("Start")

// for(let i=0 ; i<5 ; i++){
//     if(i == 3){
//         continue;
//     }
//     console.log(i)       // 0  1  2  4
// }

// console.log('End')



// console.log("Start")
// let i = 0                // 3

// while (i < 5) {
//     if (i == 3) {
//         i++;
//         continue;
//     }
//     console.log(i)       //  0  1  2  4

//     i++;
// }

// console.log("End")


//SWITCH STATEMENT

// console.log("Start")

// let day = "Monday1"

// switch (day) {
//     case 'Monday':
//         console.log('Hey its Monday');
//         break;
//     case 'Tuesday':
//         console.log('Its Tuesday');
//         break;
//     case 'Wednesday':
//         console.log('Its Wednesday')
//         break;
//     case 'Thursday':
//         console.log('Its Thursday')
//         break;
//     case 'Friday':
//         console.log('Its Friday');
//         break;
//     case "Saturday":
//         console.log('Its Saturday')
//         break;
//     case "Sunday":
//         console.log("Funday")
//         break;
//     default:
//         console.log('No day matched....')
//         break;
// }

// console.log("End")



// let x = parseInt(prompt("Enter value of x: "))
// let y = parseInt(prompt("Enter value of y: "))

// console.log(x)
// console.log(y)

// let opr = prompt("Enter value of opr: ")

// switch(opr){
//     case '+':
//         console.log("Addition: ", x+y)
//         break;
//     case '-':
//         console.log('Subtraction: ', x-y)
//         break;
//     case '*':
//         console.log('Multiplication: ', x*y)
//         break;
//     case '/':
//         console.log('Division: ', x/y)
// }


// function greet(fname){      //fname - paramter
//     console.log('Good Morning', fname)
// }

// greet('Onkar')      //"Sham" - arguement

// function add(a, b){        //a, b - parameters // a=2, b=3
//     console.log("a:", a)
//     console.log("b:", b)
//     console.log('Addition: ', a+b)
// }

// add(2, 3)     //2, 3 - arguements

// let str = "ADitya"
// const greet = function(x){
//     console.log("Good Morning, ", x)
// }
// greet(str)

// let x = 10;
// let y = 100;
// let add = function(a, b){   //a=x=10, b=y=100
//     console.log('Addition: ', a+b)
// }

// add(x, y)

// const greet = fname => {
//    return `Good Morning,  ${fname}`
// }

// console.log(greet('Onkar1'))


// const add = (a, c) => a+c

// console.log(add(2, 4))


//ERROR HANDLING 

// console.log("Start")

// try{
//     let x = 20;
//     // let y = 5
//     console.log(x/y)         //4

//     console.log('code after division')
//     console.log('last line of try block')

// } catch(err1){
//     console.log("Error: ", err1)
// } finally{
//     console.log('finally block executed')
// }

// console.log("End")


// function getRectArea(width, height) {     //width=3, height=5
//     if (isNaN(width) || isNaN(height)) {
//         throw new Error('Parameter is not a number!!!!');
//     }
//     return console.log("Area: ", height * width)
// }
// try {
//     getRectArea(3, 'six');
// } catch (e) {
//     console.error("Error:   ", e);
// }



// const person = {
//     fname: "Onkar",
//     lname: "Bhawar",
//     age: 27,
//     fullName: function(){
//         return `I am ${this.fname} ${this.lname}`
//     }
// }

// console.log(person.fullName())

// console.log("Helllo WOrld")
// window.console.log("Hello World ...")

// window.prompt('Hello Everyone, this is pop up window ')

// window.console.log(window)


// let x = document.getElementById('z1')

// console.log(x.textContent)

// let x = document.getElementsByClassName('cls1')
// console.log(x[0].textContent)

// console.log(x[1].textContent)

// let x = document.getElementsByTagName('h2')

// console.log(x[0].textContent)
// console.log(x[1].textContent)
// console.log(x[2].textContent)

// let x = document.querySelector('h2')
// console.log(x.textContent)

// let x = document.querySelectorAll('.cls4')
// console.log(x[0].textContent)
// console.log(x[1].textContent)

// let element = document.querySelectorAll('#i2')
// console.log(element[0].textContent)

// let ele = document.querySelectorAll('#i2')
// console.log(ele[0].tagName)
// console.log(ele[1].textContent)
// console.log(ele[2].textContent)



// let ele = document.getElementsByClassName('cls4')
// console.log(ele[1].tagName)

// let x = document.getElementById('m11')
// console.log(x.textContent)
// console.log(x.innerText)

// x.textContent = 'My name is Onkar.'
// console.log(x.innerHTML)



// let element = document.querySelector('img')

// element.setAttribute('src', '111https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D')

// element.setAttribute('alt', 'New Image broken')

// const x = element.getAttribute('alt')
// console.log(x)



// let p = document.getElementsByClassName('cls1')

// // console.log(p[0].)

// p[0].style.color = 'red'
// p[0].style.backgroundColor = 'black'
// p[0].style.border = '2px solid red'
// p[0].style.borderRadius = '10px'



// console.log(p[0].style.color)

// background-color ----> backgroundColor



// let div = document.getElementById('d1')

// let newElement = document.createElement('span')
// newElement.textContent = "World !"

// div.append(newElement)
// div.prepend(newElement)

// div.after(newElement)

// div.before(newElement)

// div.remove()


// let btn = document.getElementsByTagName('button')

// btn[0].onclick = (e) => {
//     console.log('btn 1 .....')
//     console.log(e.clientX)
//     console.log(e.clientY)
//     console.log(e.target.tagName)
// }
// btn[1].ondblclick = () => {
//     console.log('btn 2 .....')
//     alert('btn 2 clicked......')
// }

// let div = document.querySelector('div')

// div.onmouseover = () =>{
//     console.log('div hovered....')
// }




// let btn = document.querySelector('button')
// const fn = function(){
//     console.log('btn 1111111111')
// }
// btn.addEventListener('click', fn )

// btn.removeEventListener('click', fn)





// class Person {
//     constructor() {
//        console.log('ctor called')
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }




// class Person {
//     constructor(name, age) {
//         console.log('ctor called')
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }



// const obj1 = new Person("Onkar", 27);
// console.log(obj1.name)
// obj1.greet()


// class Employee extends Person {
//     constructor(name, age, job) {
//         super(name, age);  
//         this.job = job;
//     }

//     work() {
//         console.log(`${this.name} is working as a ${this.job}.`);
//     }
// }

// const employee1 = new Employee('Bob', 30, 'Developer');
// employee1.greet();   
// employee1.work();    



// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Employee extends Person {
//     constructor(name, age, job) {
//         super(name, age);    
//         this.job = job;   
//     }

//     displayJob() {
//         console.log(`${this.name} works as a ${this.job}.`);
//     }
// }

// const emp1 = new Employee('Alice', 30, 'Engineer');
// console.log(emp1.name); 
// console.log(emp1.age); 
// emp1.displayJob();      



// class Animal {
//     speak() {
//         console.log('Animal speaks');
//     }
// }

// class Dog extends Animal {
//     speak() {
//         super.speak();
//         console.log('Dog barks');
//     }
// }

// const dog = new Dog();
// dog.speak();


// class Person {
//     constructor(name, age) {
//         this.name = name; // Public property
//         let _age = age; // Private variable (not accessible outside)

//         this.getAge = function () {
//             return _age;
//         };

//         this.setAge = function (newAge) {
//             if (newAge > 0) _age = newAge;
//             else console.log("Invalid age");
//         };
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// const person1 = new Person("Alice", 25);
// console.log(person1.name); // Alice
// console.log(person1.getAge()); // 25

// person1.setAge(30);
// console.log(person1.getAge()); // 30

// person1.setAge(-5); // Invalid age



// class Car {
//     constructor(model) {
//         this.model = model;
//     }

//     start() {
//         console.log("Car is starting...");
//         this._fuelInjection(); // Private method
//     }

//     _fuelInjection() {
//         console.log("Fuel injection process...");
//     }
// }

// const car1 = new Car("Tata");
// car1.start();


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Call parent constructor
//         this.breed = breed;
//     }

//     speak() {
//         console.log(`${this.name} barks`);
//     }
// }

// const dog1 = new Dog("Buddy", "Golden Retriever");
// dog1.speak(); // Output: Buddy barks


// class Animal {
//     speak() {
//         console.log("This animal makes a sound");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Meow Meow!");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Woof Woof!");
//     }
// }

// const animals = [new Animal(), new Cat(), new Dog()];

// animals.forEach((animal) => animal.speak());



// console.log('Start');
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log('End');



// console.log('Start');
// setTimeout(() => {
//   console.log('Asynchronous task'); 
// }, 2000);
// console.log('End');



// function greet(name, callback) {
//     console.log('Hello, ' + name);
//     callback(); // Synchronous callback
// }

// function afterGreet() {
//     console.log('Greeting completed.');
// }

// greet('Onkar', afterGreet);






// function fetchData(callback) {
//     setTimeout(() => {
//         console.log('Data fetched from server');
//         callback(); // Asynchronous callback
//     }, 2000);                                               // Simulates 2 seconds delay
// }

// function processData() {
//     console.log('Processing fetched data...');
// }

// console.log('Start');
// fetchData(processData);                                      // Asynchronous
// console.log('End');



// function greet(name) {
//     return `Hello, ${name}!`;
// }

// function processUserInput(callback) {
//     const userName = "Onkar";
//     return callback(userName); // Passing greet as the callback
// }

// console.log(processUserInput(greet)); // Output: Hello, John!



// function multiplier(factor) {
//     return function (num) {
//         return num * factor;
//     };
// }

// // const double = multiplier(2); // Returns a function that doubles a number
// const triple = multiplier(3); // Returns a function that triples a number

// // console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15


// setTimeout(() => {
//     console.log('Step 1: Prepare ingredients');
//     setTimeout(() => {
//         console.log('Step 2: Cook food');
//         setTimeout(() => {
//             console.log('Step 3: Serve food');
//             setTimeout(() => {
//                 console.log('Step 4: Clean dishes');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// let promise = new Promise(function (resolve, reject) {
//     let isLogin = true;
//     if (isLogin) {
//         setTimeout(() => {
//             resolve("You are logged in...")
//         });
//     } else {
//         reject("You are not logged in. Please Login")
//     }
// })
// console.log(promise)

// // console.log(promise)
// promise.then((res) => {
//     console.log('Then: ', res)
// }).catch((err) => {
//     console.log("Error: ", err)
// })




// async function getData() {
//     let result = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await result.json(); // Extract the JSON body
//     console.log(data);

//     let d1 = document.querySelector('h2')
//     d1.innerText += data[0].name
// }
// getData();
// console.log(2 + 3);

// add()

// function add(){
//     console.log('fn called')
// }


// const add = () =>{
//     console.log('fn called.........')
// }

//var x;

// console.log(x)

// var x = 100
