/*
Primitive Data Type in JS:
string, number, boolean, null, undefined
*/

var name ="javascript"
console.log(typeof(name));//"string"

var myName = "Java"
console.log(typeof(myName));//"string"

/*
Number Literal:
we only have number data type. No int, double, byte
*/

var myNum = 20;
console.log(typeof(myNum));//"number"

var myNum = 20.5;
console.log(typeof(myNum));//"number"


var myNum=20/0;
console.log(myNum);//Infinity (do not get an exception)
console.log(typeof(myNum));//"number"

var num1=20+'a';
console.log(num1);//"20a"
console.log(typeof(num1));//"string"

var num2= 'a'+20;
console.log(num2);//"a20"
console.log(typeof(num2));//"string"

//In Java this in type of combination 'a' can be considered as
//ASCII value, but here it does not happen. String overrides
//the number type value

/*
boolean:
True or False
*/

var isExist=true;
console.log(isExist);//true
console.log(typeof(isExist));//"boolean"

var isExist=false;
console.log(isExist);//false
console.log(typeof(isExist));//"boolean"


/*
null
*/

var pickedColor=null;
console.log(pickedColor);//null
console.log(typeof(pickedColor));//"object"

/*
undefined
*/

var selectedCar;
console.log(selectedCar);//undefined
console.log(typeof(selectedCar));//"undefined"

var selectedCar=undefined;
console.log(selectedCar);//undefined
console.log(typeof(selectedCar));//"undefined"

/*
To avoid confusion we should assigne 'null' if we not sure the initial value
*/
