'use strict'
let modalhide = document.getElementById('modal');
let item = document.getElementById('item')
let X = document.getElementById('X')
function hide(){
   modalhide.style.display = "none";
};
function show(){
   modalhide.style.display = "block"; 
};
X.addEventListener("click",hide);
item.addEventListener("click",show);