//event bubbling
// document.getElementById("parent").addEventListener("click",function(){
//     console.log("Parent is clicked");
// })
// document.getElementById("child").addEventListener("click",function(){
//     console.log("child is clicked");
// })
// document.getElementById("grand-child").addEventListener("click",function(e){
//     e.stopPropagation();
//     console.log("grand child is clicked");
// })


// document.getElementById("parent").addEventListener("click",function(){
//     console.log("Parent is clicked");
// },false)
// document.getElementById("child").addEventListener("click",function(){
//     console.log("child is clicked");
// },false)
// document.getElementById("grand-child").addEventListener("click",function(){
//     console.log("grand child is clicked");
// },false)


//event capturing
// document.getElementById("parent").addEventListener("click",function(){
//     console.log("Parent is clicked");
// },true)
// document.getElementById("child").addEventListener("click",function(){
//     console.log("child is clicked");
// },true)
// document.getElementById("grand-child").addEventListener("click",function(){
//     console.log("grand child is clicked");
// },true)

function fetchData(){
    console.log("fetching data from database");
}

function stop(e){
    e.stopPropagation();
}

function prevent(e){
    e.preventDefault();
}