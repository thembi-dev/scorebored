const one=document.getElementById("number")
const two=document.getElementById("number")
const three=document.getElementById("number")
const four=document.getElementById("numbers")
const five=document.getElementById("numbers")
const six=document.getElementById("numbers")
const reseter= document.getElementById("number")
const seting=document.getElementById("numbers")

let count=0
 



function  ones(){
 one.textContent=count +=1
 }
ones()
function  twos(){
 two.textContent=count +=2
 }
twos()
function  threes(){
 three.textContent=count +=3
 }
threes()
function  ene(){
 four.textContent=count +=1
 }
ene()
function  twe(){
 five.textContent=count +=2
 }
twe()
function  tree(){
six.textContent=count +=3
 }
tree()
function  reset(){
   reseter.textContent=0
   seting.textContent=0 
 count.textContent=0
 count=0
 }
 reset()
