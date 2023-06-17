//HOISTING
// getName();
// console.log(x);
// console.log(getName);
// var x=7;
// function getName(){
//     console.log("BUNNY");
// }

//HOW FUNCTION WORKS
// var x=1;
// a();
// b();
// console.log(x);
// function a(){
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }

//SHORTEST JS PROGRAM
// var a=10
// function a(){
//     var x=100
// }
// console.log(window.a);
// console.log(a);
// console.log(this.a);

//UNDEFINED
// console.log(a);
// var a=7;
// console.log(a);
// var a;
// console.log(a);
// a=10;
// // if(a===undefined){
// //     console.log("a is undefined");
// // }else{
// //     console.log("a is not undefined");
// // }
// console.log(a);
// a='hello world'
// console.log(a);

//SCOPE CHAIN
// function a(){
//     var b=10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// a()

// MAP REDUCE FILTER
// const arr=[5,4,67,8,9]
// //double-[10, 8, 134, 16, 18]
// //triple-[15, 12, 201, 24, 27]
// //binary-[]

// function triple(x){
//     return x*3
// }
// function binary(x){
//     return x.toString(2)
// }
// const output1=arr.map(triple);
// //const output=arr.map(double);
// const output2=arr.map(binary)

// const output=arr.map(function double(x){
//     return x*2
// });
// const output3=arr.map((x)=>{
//     x*9
// });
// console.log(output);
// console.log(output1);
// console.log(output2);
// console.log(output3);

//FILTER
// const arr=[5,1,3,2,6]
// //filter odd values
// function isOdd(x){
//     return x % 2
// }
// function isEven(x){
//     return x % 2===0;
// }

// const output=arr.filter(isOdd)
// const output1=arr.filter(isEven)
// // const output3=arr.filter(function greaterThan4(x){
// //     return x >4})
// const output3=arr.filter((x)=>x >4)
// console.log(output);
// console.log(output1);
// console.log(output3);

//REDUCE
//const arr=[5,1,3,2,6]
//sum or max
// function findSum(arr){
//     let sum=0;
//     for (let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));

// function findMax(arr){
//     let max=0;
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// const output=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(output);

// const output=arr.reduce(function(max,curr){
//     if(curr>max){
//         max=curr;
//     }
//     return max
// },0)
// console.log(output);
// const users=[
//     {firstName:'akshay' ,lastName:'saini',age:26},
//     {firstName:'bunny' ,lastName:'chinni',age:29},
//     {firstName:'sai' ,lastName:'kumar',age:26},
//     {firstName:'anil' ,lastName:'nani',age:30},
// ]
//list of fullnames
// const output=users.map((x)=>x.firstName +" "+ x.lastName)
// console.log(output);

//acc={26:2,29:1,30:1}
// const output=users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         //acc[curr.age]++
//         acc[curr.age]=++acc[curr.age]
//     }else{
//         acc[curr.age]=1
//     }
//     return acc;
// },{})
// console.log(output);
//const output=users.filter(x=>x.age<30).map((x)=>x.firstName)

//HIGHER ORDER FUNCTIONS

//const radius=[3,1,2,4];
// const calculateArea=function(radius){
//     const output=[]
//     for (let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i])
//     }
//     return output
// }
// console.log(calculateArea(radius));

// const calculateCircum=function(radius){
//     const output=[]
//     for (let i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i])
//     }
//     return output
// }
// console.log(calculateCircum(radius));

// const calculateDiameter=function(radius){
//     const output=[]
//     for (let i=0;i<radius.length;i++){
//         output.push(2*radius[i])
//     }
//     return output
// }
// console.log(calculateDiameter(radius));
// const area=function(radius){
//     return  Math.PI*radius*radius
// }
// const circum=function(radius){
//     return 2*Math.PI*radius
// }
// const diam=function(radius){
//     return 2*radius
// }
// const calculate=function(radius,logic){
//     const output=[];
//     for (let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// Array.prototype.calculate=function(logic){
//     const output=[];
//     for (let i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// console.log(radius.map(area));
// console.log(radius.calculate(area));
//console.log(calculate(radius,area));
//console.log(calculate(radius,circum));
//console.log(calculate(radius,diam));

//SETTIMEOUT TRUST ISSUES
// console.log("start");
// // setTimeout(function cb(){
// //     console.log("call back");
// // },5000);
// function cb(){
//     console.log("call back");
// }
// setTimeout(cb,0);
// console.log("end");
// //million code takes 10 sec
// let startDate=new Date().getTime();
// let endDate=startDate;
// while(endDate<startDate+10000){
//     endDate=new Date().getTime();
// }
// console.log("while expires");

//CALL BACK FUNCTIONS

//what is a callback function in javascript
// setTimeout(function(){
//     console.log("timer");
// },5000);

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// })
// function attachEventListener(){
//     let count=0
//     document.getElementById("clickMe").addEventListener("click", function xyz(){
//         console.log("button clicked",++count);
//     })
// }
// attachEventListener();

//CLOUSURES
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();
// function x(){
//     var a=7;

//     y();
// }
// x( function y(){
//     console.log(a);
// });

// function z() {
//     var b=900
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a,b);
//     }
//     y();
//   }
//   x();
// }
// z();
// function x() {
//     var a = 7;
//     return function y() {
//       console.log(a);
//     }

//   }
//   var z=x();
//   console.log(z);
//   z();

//CALL APPLY AND BIND
// let name={
//   firstName:"bunny",
//   lastName:"chinni",
//   // printFullName:function(){
//   //   console.log(this.firstName+" " +this.lastName);
//   // }
// }
// let printFullName=function(hometown,state){
//   console.log(this.firstName+" " +this.lastName+" from "+hometown+ ", "+state);
// }
// printFullName.call(name,"Dmm","ap")
// //name.printFullName()

// let name2={
//   firstName:"nani",
//   lastName:"chinni",
// }

// //function borrowing
// printFullName.call(name2,"agra","delhi")

// printFullName.apply(name2,["agra","delhi"])

// //bind method
// let printMyName=printFullName.bind(name2,"agra","delhi")
// console.log(printMyName);
// printMyName();

//POLYFILL FOR BIND

// let name={
//   firstName:"bunny",
//   lastName:"chinni",
    
// }
// let printName=function(hometown,state,country){
//   console.log(this.firstName+" " +this.lastName+" , "+hometown+", "+state+","+country);
// }
// let printMyName=printName.bind(name,"agra");
// printMyName("delhi","india")
// Function.prototype.mybind=function(...args){
//   let obj=this,
//   params=args.slice(1)
// return function(...args2){
//   obj.apply(args[0],[...params,...args2])
// }
// }

// let printMyName2=printName.mybind(name,"agra");
// printMyName2("delhi","india")


//DEBOUNCING IN JS
// let counter=0;
// const getData=()=>{
//   //calls an API and gets DATA
//   console.log("Fetching Data......",counter++);
// }
// const debounce=function(fn,d){
//   let timer;
//   return function(){
//     let context=this,
//     args=arguments;
//     clearTimeout(timer);
//     timer=setTimeout(()=>{
//       fn.apply(context,args)
//     },d)
//   }
// }
// const betterFunction=debounce(getData,300)

//CURRYING 
// let multiply=function(x,y){
//   console.log(x*y);
// }

// let multiply=function(x){
//   return function(y){
//     console.log(x*y);
//   }
// }

// let multiplyByTwo=multiply.bind(this,2,3);
// multiplyByTwo(5)
// let multiplyByTwo=multiply.bind(this,);
// multiplyByTwo(2,3)

// let multiplyByThree=multiply.bind(this,3);
// multiplyByThree(5)

// let multiplyByTwo=multiply(2);
// multiplyByTwo(3)
// let multiplyByThree=multiply(3);
// multiplyByThree(10)

//EVENT BUBBLING CAPTURING IN JS

// document.querySelector(".grandparent")
// .addEventListener('click',()=>{
//   console.log("grand parent was called");
// },true)//capturing
// document.querySelector(".parent")
// .addEventListener('click',()=>{
//   console.log("parent was called");
// },false)//bubbling
// document.querySelector(".child")
// .addEventListener('click',()=>{
//   console.log("child was called");
// },true)//capturing

// document.querySelector(".grandparent")
// .addEventListener('click',()=>{
//   console.log("grand parent was called");
// },false)
// document.querySelector(".parent")
// .addEventListener('click',(e)=>{
//   console.log("parent was called");
// },false)
// document.querySelector(".child")
// .addEventListener('click',(e)=>{
//   console.log("child was called");
//   e.stopPropagation();
// },false)

// document.querySelector(".grandparent")
// .addEventListener('click',()=>{
//   console.log("grand parent was called");
// },true)
// document.querySelector(".parent")
// .addEventListener('click',(e)=>{
//   console.log("parent was called");
// },true)
// document.querySelector(".child")
// .addEventListener('click',(e)=>{
//   console.log("child was called");
//   e.stopPropagation();
// },true)

// document.querySelector(".grandparent")
// .addEventListener('click',(e)=>{
//   console.log("grand parent was called");
//   e.stopPropagation();
// },true)
// document.querySelector(".parent")
// .addEventListener('click',(e)=>{
//   console.log("parent was called");
// },true)
// document.querySelector(".child")
// .addEventListener('click',(e)=>{
//   console.log("child was called");
  
// },true)

//EVENT DELEGATION

// document.querySelector("#category").addEventListener('click',(e)=>{
//   //console.log("category parent clicked");
//   //console.log(e);
//   //console.log(e.target);
//   console.log(e.target.id);
//   if (e.target.tagName=='LI'){
//     window.location.href="/" +e.target.id;//event delegation
//   }
  
// })

//PROTOTYPE

//let arr=["bunny","chinni"]
let object={
  name:"bunny",
  city:"kerala",
  getIntro:function(){
    console.log(this.name + " from " +this.city);
  }
}
// function fun(){

// }
let object2={
  name:"Aditya",
  city:"delhi"
}

//Never do this
object2.__proto__=object
//object 2 is inheriting the properties of object

Function.prototype.mybind=function(){
  console.log("sdkgklfdgm");
}

function fun(){

}
function fun2(){
  
}