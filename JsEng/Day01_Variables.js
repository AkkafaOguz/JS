var myName
console.log(myName); //undefined 
// By default, variables are undefined

//var variables can be used multiple times
//Last one override the previos one

var myName = 'Javascript';//"Javascript"
console.log(myName);

var myName = 'Java';//"Java"
console.log(myName);

myName=true;
console.log(myName);//true

myName=6;
console.log(myName);//6

// var fName;
// var lName;

// var fName, lName;

//Ustteki iki yontem de deklarasyon icin kullanilabilir

var fName='John', lName='Cash';

console.log(fName);//"John"
console.log(lName);//"Cash"

var firstName='Sam'
var lastName='Walton'
console.log(firstName +' '+ lastName);//"Sam Walton"
//This is the most common way to create a variable