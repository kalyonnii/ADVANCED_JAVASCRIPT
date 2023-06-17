//MAP
//let nums = [1, 2, 3, 4, 5];
function square(num) {
  return num * num;
}
//console.log(square(5));
function squareOfEach(originalArr) {
  let tempArray = [];
  for (let num of originalArr) {
    tempArray.push(num * num);
  }
  return tempArray;
}
//console.log(squareOfEach(nums));
// let res=nums.map(function(item){
//     return item*item;
// })
//let res=nums.map((item)=> item*item);
// let res = nums.map((item) => square(item));
// console.log(res);

// let students=[
//     {id:1,firstName:"bunny", lastName:"chinni"},
//     {id:2,firstName:"nani", lastName:"bunny"},
//     {id:3,firstName:"baby", lastName:"roy"},
// ];
//let fullNames=students.map(student=>student.firstName+" "+student.lastName)
//console.log(fullNames);

//FILTER
//let evenNums=nums.filter(num=>num%2==0);
// let evenNums = nums.filter((num) => num > 4);
// console.log(evenNums);

// let students = [
//   { id: 1, firstName: "bunny", lastName: "chinni", gender: "male" },
//   { id: 2, firstName: "nani", lastName: "bunny", gender: "female" },
//   { id: 3, firstName: "baby", lastName: "roy", gender: "male" },
// ];
// let boys = students
//   .filter((student) => student.gender === "male")
//   .map((boy) => boy.firstName);
// console.log(boys);

// //REDUCE
// let tempSum=0;//accumulator
// for(let num of nums){//let=current value
//     tempSum=tempSum+num;
// }
// console.log(tempSum);
// let totalSum=nums.reduce((acc,curr)=>{
//     acc=acc+curr;
//     return acc;
// })
// console.log(totalSum);

// let minNum=nums.reduce((min,item)=>{
//     if (item<min){
//         min=item;
//     }
//     return min;
// })
// console.log(minNum);

let nums=[3,0,2,6,1,5,8,7];
//let res=nums.filter(num=>num>4);
// let res=nums.find(num=>num>4)
let res=nums.findIndex(num=>num>4)
//console.log(res);

let ages=[22,27,19,19,21];
// isPresent=false;
// for(let age of ages){
//     if(age<18){
//         isPresent=true
//     }
// }
// console.log(isPresent);

// console.log(ages.some(age=>age<14));
// console.log(ages.every(age=>age>18));

//SETTIMEOUT AET INTERVAL
function request(){
    console.log("hello bunny");
}
// setTimeout(request,3000)
// setTimeout(request,5000)
// setTimeout(function(){
//     console.log("hello chinni");
// },5000);

// setTimeout(()=>{
//     console.log("hello chinni");
// },5000);

// setInterval(() => {
//     console.log("hello ");
// }, 1000);

// let counter=0;
// let intervalId=setInterval(()=>{
//     counter++;
//     console.log("counter:"+counter);
// },1000);
// setTimeout(()=>{
//     clearInterval(intervalId)
// },4000)

// let timeoutId=setTimeout(()=>{
//     console.log("6 sec");
// },6000)
// setTimeout(()=>{
//     clearInterval(timeoutId)
//     console.log("stopped");
// },3000)

let obj1={
    firstName:"bunny",
    lastName:"chinni",
    fullName:function(){
        console.log(this.firstName+" "+this.lastName);
    }
}
let obj2={
    firstName:"bunny",
    lastName:"nani",
}
//obj1.fullName();

//obj1.fullName.call(obj2)

let fullName=function(){
    console.log(this.firstName+" "+this.lastName);
}
// fullName.call(obj1)
// fullName.call(obj2);

function greet(salutation,period){
    console.log(salutation+period+this.name);
}
let myObj={
    name:"chinni"
}
// greet.call(myObj,"Miss",".")
// greet.apply(myObj,["Miss","."])

// let myfn=greet.bind(myObj,"Miss",".")
// myfn();
let myfn=greet.bind(myObj)
//myfn("Miss",".");

//MEMOIZATION
// function factorial(x){
//     if(x==0){
//         return 1;
//     }else{
//         console.log("Finding factorial of "+x);
//         return x*factorial(x-1);
//     }
// }
// factorial(5)

// function fibonacci(n){
//     let value=0;
//     if(n==0||n===1){
//         value=n;
//     }else{
//         value=fibonacci(n-1)+fibonacci(n-2)
//     }
//     return value;
// }
// console.log(fibonacci(44));
let cache={};
function fibonacci(n){
    let value=0;
    if(n in cache){
        value=cache[n];
    }else{
        if(n==0||n===1){
            value=n;
        }else{
            value=fibonacci(n-1)+fibonacci(n-2)
            cache[n]=value
        }
    }
    return value;
}
console.log(fibonacci(440));