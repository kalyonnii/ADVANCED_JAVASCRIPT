// //MAP METHOD
// const people = [
//   {
//     name: "bob",
//     age: 20,
//     position: "developer",
//   },
//   {
//     name: "anna",
//     age: 25,
//     position: "designer",
//   },
//   {
//     name: "susy",
//     age: 30,
//     position: "the boss",
//   },
//   {
//     name: "john",
//     age: 26,
//     position: "intern",
//   },
// ];

// //   const ages = people.map((person) => {
// //     // console.log(person);
// //     // return "Hello world "
// //     return person.age*2;
// //   });
// // const ages=people.map((person)=>person.age*2)
// const getAges = (person) => person.age * 3;
// const ages = people.map(getAges);
// console.log(ages);

// const newPeople = people.map((item) => {
//   return {
//     firstName: item.name.toUpperCase(),
//     oldAge: item.age + 20,
//   };
// });
// console.log(newPeople);

// const names = people.map((person) => `<h2>${person.name}</h2>`);
// const result = document.querySelector("#result");

// result.innerHTML = names.join('');

//UNIQUE VALUES

// const menu = [
//     {
//       name: "pancakes",
//       category: "breakfast",
//     },
//     {
//       name: "burger",
//       category: "lunch",
//     },
//     {
//       name: "steak",
//       category: "dinner",
//     },
//     {
//       name: "bacon",
//       category: "breakfast",
//     },
//     {
//       name: "eggs",
//       category: "breakfast",
//     },
//     {
//       name: "pasta",
//       category: "dinner",
//     },
//   ];
// //   const categories = menu.map((item) => item.category);
// //   console.log(categories);

// //   const categories1 = new Set(menu.map((item) => item.category));
// //   console.log(categories1);

// //   const categories2 = [...new Set(menu.map((item) => item.category))];
// //   console.log(categories2);

//   const categories3 = ["all", ...new Set(menu.map((item) => item.category))];
//   console.log(categories3);

//   const result = document.querySelector(".result");
//   result.innerHTML = categories3
//     .map((category) => {
//       return `<button>${category}</button>`;
//     })
//     .join("");

//DOT NOTATION
// const person={
//   name:'john'
// };
// console.log(person.name);
// person.age=25;
// console.log(person);
// //square bracket notation
// const items={
//   'featured-items':['item1','item2']
// }
// console.log(items["featured-items"]);
// console.log(person['name']);

// let appState='loading';
// appState='error'
// const keyName='computer'
// const app={
//   [appState]:true
// }
// app[keyName]='apple';
// console.log(app );

// const state={
//   loading:true,
//   name:'',
//   job:''
// }
// function updateState(key,value){
//   state[key]=value
// }
// updateState('name','john');
// updateState('job','developer');
// updateState('loading',false);
// updateState('products',[]);
// updateState('name','peter')
// console.log(state);

// //FILTER AND FIND
// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
//   { name: "anna", age: 35, position: "intern" },
// ];
// const fruits=['orange','pear','lemon']
// //filter
// const youngPeople=people.filter((person)=>{
//     // console.log(person);
//     // return false;
//     // if(person.age<30){
//     //     return person;
//     // }
//     return person.age<30
// })
// console.log(youngPeople);

// const developers=people.filter((person)=>person.position==='developer');
// console.log(developers);
// //no match

// const seniorDevs=people.filter((item)=>item.position==='senior dev');
// console.log(seniorDevs);

// //FIND
// const peter=people.find((person)=>person.name==='peter');
// console.log(peter);
// const fruit=fruits.find((fruit)=>fruit==='lemon');
// console.log(fruit);

// //no match
// const oldPerson=people.find((person)=>person.age>35);
// console.log(oldPerson);

// //mutiple matches -first match
// const randomPerson=people.find((person)=>person.age<35);
// console.log(randomPerson);

// const anna =people.filter((person)=>person.name==='anna');
// console.log(peter.position);
// console.log(anna[0].position);

//REDUCE

// const staff = [
//   { name: "bob", age: 20, position: "developer",salary:100 },
//   { name: "peter", age: 25, position: "designer" ,salary:300},
//   { name: "susy", age: 30, position: "the boss",salary:400 },
//   { name: "anna", age: 35, position: "intern" ,salary:10},
// ];
// const dailyTotal=staff.reduce((total,person)=>{
//     console.log(total);
//     console.log(person.salary);
//     total+=person.salary
//     return total
// },0)
// console.log(dailyTotal);

// //CART EXAMPLE
// const cart = [
//   {
//     title: "samsung Salaxy s7",
//     price: 599.99,
//     amount: 1,
//   },
//   {
//     title: "google pixel",
//     price: 499.99,
//     amount: 2,
//   },
//   {
//     title: "Xiaomi Redmi Note 2",
//     price: 699.99,
//     amount: 4,
//   },
//   {
//     title: "Xiaomi Redmi Note 5",
//     price: 399.99,
//     amount: 3,
//   },
// ];
// // let total=cart.reduce(
// //     (total,carItem)=>{
// //         const {amount,price}=carItem;
// //         //count items
// //         total.totalItems+=amount
// //         //COUNT SUM
// //         total.cartTotal+=amount*price
// //         return total
// //     },
// //     {
// //         totalItems:0,
// //         cartTotal:0,
// //     }
// // )
// let { totalItems, cartTotal } = cart.reduce(
//   (total, carItem) => {
//     const { amount, price } = carItem;
//     //count items
//     total.totalItems += amount;
//     //COUNT SUM
//     total.cartTotal += amount * price;
//     return total;
//   },
//   {
//     totalItems: 0,
//     cartTotal: 0,
//   }
// );
// cartTotal = parseFloat(cartTotal.toFixed(2));
// // console.log(total);
// console.log(totalItems, cartTotal);

// const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

// const fetchRepos = async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   const newData = data.reduce((total, repo) => {
//     const { language } = repo;
//     // if(language){
//     // if(total[language]){
//     //     total[language]=total[language]+1
//     // }
//     // else{
//     //     total[language]=1
//     // }
//     // }
//     if (language) {
//       total[language] = total[language] + 1 || 1;
//     }
//     return total;
//   }, {});
//   console.log(newData);
// };
// fetchRepos();

// //DESTRUCTURING ARRAY

// const fruits=['orange','banana','lemon'];
// const friends=['john','peter','bob','anna','kelly']
// const fruit1=fruits[0];
// const fruit2=fruits[1];
// const fruit3=fruits[2];
// console.log(fruit1,fruit2,fruit3);

// const [enemy,peter,,anna,kelly,susan]=friends;
// console.log(enemy,peter, anna,kelly,susan);

// let first='bob';
// let second='john';

// // let temp=second;
// // second=first;
// // first=temp;

// [second,first]=[first,second]
// console.log(first,second);

// //DESTRUCTURING objects
// const bob = {
//   first: "bob",
//   last: "sanders",
//   city: "chicago",
//   siblings: {
//     sister: "jane",
//   },
// };

// const last = "some value";
// const {
//   last: shakeandbake,
//   first,
//   city,
//   zip,
//   siblings: { sister: favoritesibling },
// } = bob;
// console.log(first, last, city, zip, shakeandbake, favoritesibling);
// // const firstName = bob.first;
// // const lastName = bob.last;
// // const sister = bob.siblings.sister;
// // console.log(firstName, lastName, sister);

// // function printperson(person) {
// //   // console.log(person.first);
// //   const { first, last } = person;
// //   console.log(first, last);
// // }
// function printperson({first,last,city,siblings:{sister}}) {
//     // console.log(person.first);
//     // const { first, last } = person;
//     console.log(first, last,city,sister);
//   }
// printperson(bob);

// //REST OPERATOR

// //arrays
// const fruits =['apple','orange','lemon','banana'];
// const [first,second,...restOfTheFruits]=fruits;
// console.log(first,restOfTheFruits);
// const specificFruit=restOfTheFruits.find((fruit)=>fruit==='lemon')
// console.log(specificFruit);

// //objects
// const person={name:'john',lastName:'smith',job:'developer'};
// // const {name,...rest}=person;
// const {job,...rest}=person;
// // console.log(name,rest);
// console.log(job,rest);
// //functions

// const getAverage=(name,...scores)=>{
//     console.log(name);
//     console.log(scores);
//     const average=scores.reduce((total,item)=>{return total+=item},0)/scores.length;
//     console.log(average);
// }
// // getAverage(person.name,89,56,78,88,100)
// const testScores=[23,45,67,89];
// getAverage(person.name,...testScores)

//SPREAD OPERATOR

// const udemy='udemy';
// const letters=[...udemy];
// console.log(letters);
// const boys=['john','peter','bob'];
// const girls=['susan','anna'];
// const bestFriend='arnold';

// const friends=[...boys,...girls,bestFriend]
// console.log(friends);

// //reference
// //const newFriends=friends;
// //copy
// const newFriends=[...friends]
// newFriends[0]='nancy';
// console.log(friends);
// console.log(newFriends);

// //ES2018-ES8 OBJECTS

// const person={name:'john',job:'developer'}
// const newPerson={...person,city:'chicago',name:'peter'};
// console.log(person);
// console.log(newPerson);

// //ARRAY.FROM

// const udemy='udemy'
// //console.log(Array.from(udemy));

// const text=document.querySelectorAll('.text')
// //console.log(text);
// // const newText=Array.from(text)
// // console.log(newText);
// const newText=Array.from(text).find((item)=>item.textContent==='person')
// //console.log(newText);
// const items=Array.from({length:120},(_,index)=>{
//   return index
// })

// const itemsPerPage=14
// const pages=Math.ceil(items.length/itemsPerPage)
// // console.log(pages);

// const newItems=Array.from({length:pages},(_,index)=>{
//   const start=index*itemsPerPage
//   const tempItems=items.slice(start,start+itemsPerPage)
//   return tempItems
// })

// console.log(newItems);

//OPTIONAL CHAINING
// const people = [
//   {
//     name: "bob",
//     location: { street: "123 main street", timezone: { offset: "+7:00" } },
//   },
//   { name: "peter", location: { street: "123 pine street" } },
//   {
//     name: "susan",
//     location: { strret: "123 apple street", timezone: { offset: "+9:00" } },
//   },
// ];

// people.forEach((person) => {
//   //console.log(person.name);
//   // console.log(
//   //   person.location &&
//   //     person.location.timezone &&
//   //     person.location.timezone.offset
//   // );
//   console.log(person?.location?.timezone?.offset||'hello world');
// });

// // console.log(true&&'helloworld');
// // console.log(false&&'hello people');

//CALL BACK FUNCTIONS

// function makeUpperCase(value){
//     console.log(value.toUpperCase());
// }
// //makeUpperCase('bunny')
// function reverseString(value){
//     console.log(value.split('').reverse().join(''));
// }
// function handleName(name,cb){
//     const fullName=`${name} smith`
//     cb(fullName)
//     // cb(fullName)
//     // cb(fullName)
//     // cb(fullName)
//     // cb(fullName)
// }
// // handleName('bunny',makeUpperCase)
// // handleName('bunny',reverseString)

// handleName('susan',(value)=>{
//     console.log(value);
// })

// const btn=document.querySelector('.btn')
// btn.addEventListener('click',()=>{
//     console.log('hello world');
// })

//CALLBACK HELL

// const first =document.querySelector('.first')
// const second=document.querySelector('.second')
// const third=document.querySelector('.third')

// const btn=document.querySelector('.btn')

// btn.addEventListener('click',()=>{
//     // console.log('hello world');
//     setTimeout(()=>{
//         first.style.color='red'
//         setTimeout(()=>{
//             second.style.color='blue'
//             setTimeout(()=>{
//                 third.style.color='green'
//             },2000)
//         },3000)
//     },1000)
// })

//PROMISE
// const value=2

// const promise=new Promise((resolve,reject)=>{
//     const random=Math.floor(Math.random()*3)
//     console.log(random);
//     if(random===value){
//         resolve('you guessed correctly')
//     }else{
//         resolve('wrong number')
//     }
// //resolve('bunny')
// //resolve([1,2,3])
// reject("there was an error")
// })
// console.log(promise);
// promise.then((data)=>console.log(data)).catch((err)=>console.log(err));

//Promise example

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   addColor(1000, ".first", "red",'hello world')
//     .then((data) => addColor(3000, ".second", "blue",data))
//     .then((data) => {
//         console.log(data);
//         addColor(2000, ".third", "green")})
//     .catch((err) => console.log(err));
//   // addColor(3000,'.second','blue')
//   // addColor(2000,'.third','green')
// });
// function addColor(time, selector, color,data) {
//   const element = document.querySelector(selector);
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve(data);
//       }, time);
//     } else {
//       reject(`there is no such element:${selector}`);
//     }
//   });
// }

//ASYNC AWAIT

// const example=async()=>{
//   return 'hello there'
// }
// //console.log(example());
// async function someFunc() {
//   const result=await example()
//   console.log(result);
//   console.log("hello world");
// }
// someFunc()

// const users = [
//   { id: 1, name: "john" },
//   { id: 2, name: "susan" },
//   { id: 3, name: "anna" },
// ];

// const articles = [
//   { userId: 1, articles: ["one", "two", "three"] },
//   { userId: 2, articles: ["four", "five"] },
//   { userId: 3, articles: ["six", "seven", "eight", "nine"] },
// ];

// const getData=async()=>{
//   try{
//     const user=await getUser('john')
//   //console.log(user);
//   // if(user){
//   //   const articles=await getArticles(user.id)
//   //   console.log(articles);
//   // }

//   const articles=await getArticles(user.id)
//   console.log(articles);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// getData()
// // getUser("susan")
// //   .then((user) => getArticles(user.id))
// //   .then((articles) => console.log(articles))
// //   .catch((err) => console.log(err));

// function getUser(name) {
//   return new Promise((resolve, reject) => {
//     const user = users.find((user) => user.name === name);
//     if (user) {
//       return resolve(user);
//     } else {
//       reject(`no such user with name :${name}`);
//     }
//   });
// }

// function getArticles(userId) {
//   return new Promise((resolve, reject) => {
//     const userArticles = articles.find((user) => user.userId === userId);
//     if (userArticles) {
//       return resolve(userArticles.articles);
//     } else {
//       reject("wrong id");
//     }
//   });
// }

// //FETCH API
// const url = "https://www.course-api.com/react-tours-project";
// //console.log(fetch(url));
// // fetch(url)
// //   //.then((resp) => console.log(resp))
// //   .then((resp) => resp.json())
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err));

// const getTours=async()=>{
//   try{
//     const resp=await fetch(url)
//     return resp.json()
//     //const data= await resp.json()
//     //console.log(data);
//     return data
//   }catch(error){
//     console.log(error);
//   }
// }

// console.log(getTours().then());

//FETCH ERRORS
// const url = "https://www.course-api.com/react-tours-projects";

// const getTours=async()=>{
//   try{
//     const resp=await fetch(url)
//     if(!resp.ok){
//       const msg=`there was an eror"${resp.status} ${resp.statusText}"`
//       throw new Error(msg)
//     }
//     //console.log(resp);
//     //const tours= await resp.json()
//     //console.log(tours);
//   }catch(error){
//     console.log(error);
//   }
// }
// const btn=document.querySelector('.btn')
// btn.addEventListener('click',getTours)

//width/height

// console.log('height',window.innerHeight);
// console.log('width',window.innerWidth);

// const btn=document.querySelector('.btn')
// const box=document.querySelector('.box')

// btn.addEventListener('click',()=>{
//     const dimensions=box.getBoundingClientRect()
//     console.log(dimensions);
// })

//TIMESTAMPS

// console.log(new Date());

// console.log(Date.now());
// console.log(new Date().getTime());
// console.log(new Date().valueOf());

// setTimeout(()=>{
//     console.log(Date.now());
// },1000);
// //create ids in learning apps
// let people=[];
// people=[...people,{id:Date.now(),name:'peter'}];

// setTimeout(()=>{
//     people=[...people,{id:Date.now(),name:'john'}];
//     console.log(people);
// },1000)

// //create/get dates
// console.log(new Date(16322961557647));
// const now=Date.now();
// const futureDate=new Date(now+1000*60);
// console.log(futureDate);
// console.log(new Date());

// //differences btw dates

// const firstDate=new Date();
// const secondDate=new Date(2023,5,23);

// const firstValue=firstDate.getTime();
// const secondValue=secondDate.getTime();
// console.log(firstValue);
// console.log(secondValue);
// const timeDiff=secondValue-firstValue;
// console.log(timeDiff);
// const minutes=timeDiff/(100*60)
// console.log(minutes);
// const hours=timeDiff/(1000*60*60)
// console.log(hours);

//ECMASCRIPT
// const scores=[99,90,100]
// const oldLast=scores[scores.length-1]
// console.log(oldLast);

// const newLast=scores.at(-1);
// console.log(newLast);

// const channel='simuleduco'
// console.log(channel.at(4));

// // fetch('https://www.course-api.com/react-tabs-project')
// // .then((resp)=>console.log(resp))
// // .catch((data)=>console.log(data))
// //doubt
// const resp=await fetch('https://www.course-api.com/react-tabs-project')
// const data=await resp.json();
// console.log(data);

// //GET ELEMENT HELPER
// const heading = document.querySelector(".heading");
// //console.log(heading);

// const listItems = document.querySelectorAll(".list-item");
// //console.log(listItems);

// // const getElement = (selector, isList) => {
// //   if (isList) {
// //     const el = [...document.querySelectorAll(selector)];
// //     if (el.length < 1) {
// //       throw new Error(`please double check selector:${selector}`);
// //     }
// //   }
// //   const el = document.querySelector(selector);
// //   if (el) return el;
// //   throw new Error(`please double check selector:${selector}`);
// // };
// // console.log(getElement(".heading"));

// const getElement = (selector, isList) => {
//   const el = isList
//     ? [...document.querySelectorAll(selector)]
//     : document.querySelector(selector);

//   //not a list-exit or not
//   //list-empty or not

//   // if(!isList && el) return el;
//   // if(isList && !el.length<1) return el;
//   //doubt
//   if ((!isList && el) || (isList && !el.length < 1)) return el;

//   throw new Error(`please double check selector:${selector}`);
// };
// console.log(getElement("./list-item", true));

//FOR IN LOOP
// const person={
//     name:'john',
//     age:25,
//     status:'student'
// };

// for (const propertyName in person){
//     console.log(`${propertyName}:${person[propertyName]}`);
// }

//METHODS

// const person={
//     name:'john',
//     age:25,
//     status:'student'
// };

// const keys=Object.keys(person);
// //console.log(keys);
// const values=Object.values(person);
// //console.log(values);
// const result=Object.entries(person);
// //console.log(result);

// //map method
// const newResult=result.map((item)=>{
//     const[first,second]=item
//     //console.log(first,second);
//     return first
// });
// //console.log(newResult);

// //for of
// for(const [first,second] of result){
//     //const[first,second]=item
//     console.log(first,second);
// }
//SET OBJECTS

// const unique=new Set();
// const random='third'
// unique.add('first')
// unique.add('second')
// unique.add(random)
// unique.add(4)

// //const result=unique.delete('third');
// const result=unique.delete('five')
// //console.log(result);
// const isValue=unique.has(4);
// console.log(isValue);

// console.log(unique);

//new set()

// const products=[
//     {
//         title:'high-back bench',
//         company:'ikea'
//     },
//     {
//         title:'albany table',
//         company:'macros'
//     },
//     {
//         title:'accent chair',
//         company:'caressa'
//     },
//     {
//         title:'wooden table',
//         company:'ikea'
//     },

// ]

// // const companies=products.map((item)=>item.company);
// // //console.log(companies);

// // const uniqueCompanies=new Set(companies)
// // //console.log(uniqueCompanies);

// // const finalCompanies=['all',...uniqueCompanies]
// // console.log(finalCompanies);

// const result=['all',...new Set(products.map((item)=>item.company))];
// console.log(result);

//string includes

// const products=[
//     {title:'modern poster'},
//     {title:'Bar stool'},
//     {title:'Armchair'},
//     {title:'Leather chair'},

// ];
// const text='a'
// const filteredProducts=products.filter((product)=>product.title.toLowerCase().includes(text))
// console.log(filteredProducts);

// const firstName='john'
// //const result=firstName.includes('j',1)
// const product ={
//     title:'Leather chair'
// };
// const result=product.title.includes('le')
// console.log(result);

//Array includes

// const groceries=['milk','bread','meat'];
// let randomItem='lemon'
// randomItem='milk'
// //

// if(groceries.includes(randomItem)){
//     console.log(`yeah its on the list`);
// }

//FORMDATA API
//const form = document.querySelector(".form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//   //console.log(formData);

//   //check for value
// //   const name=formData.get('name')
// //   console.log(name);
// //   //append
// //   formData.append('test','test')
// //   //delete
// //   //formData.delete('test')
// //   formData.delete('email')
// //   //check property
// //   const checkName=formData.has('name')
// //   console.log(checkName);
//   //spread out -entries,values,keys
//   const entries = [...formData.entries()];
//   console.log(entries);

//   const formObject=Object.fromEntries(formData)
//   console.log(formObject);

//   e.currentTarget.reset();
//   const values = [...formData.values()];
//   //console.log(values);
//   const keys = [...formData.keys()];
//   //console.log(keys);

// //   for (let [name, value] of formData) {
// //     console.log(`${name}=${value}`);
// //   }
// });

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const values = [...formData.values()];
//     if(values.includes('')){
//         console.log('please enter all values');
//         return;
//     }
//     const formObject=Object.fromEntries(formData)
//     console.log(formObject);

//     e.currentTarget.reset();
// });

//DEBOUNCE
const btn=document.querySelector('.btn');
// btn.addEventListener('click',()=>{
//     console.log('you clicked me');
// })

const debounce=(fn)=>{
    let timeoutID
    return ()=>{
        console.log(timeoutID);
        clearTimeout(timeoutID)
       timeoutID=  setTimeout(()=>{
            fn()
        },2000)
        
        //console.log('hello');
    }
};

btn.addEventListener('click',debounce(()=>{
    console.log('you clicked me ')
}))