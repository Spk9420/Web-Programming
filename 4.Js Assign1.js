JavaScript Assignment 1
1.WAP to illustrate implementation of functions in javascript.
function myFun()
{
  console.log("Function");
}
myFun();

function myFunc(a,b)
{
  console.log(a*b);
}
myFunc(10,10);
2.WAP to illustrate the declaration of object, assignment of value and display it.
// Create an object:
var car = {type:"Fiat", model:"500", color:"white"};
 console.log(car.type);
console.log(car.model);
console.log(car.color);


3.WAP to illustrate declaration of array , assignment of value to an array and display it.
var pesron = ["Ram", "Shyam", "Radhe"];
console.log(pesron);

4.Write a javascript function named is_integer which checks if the passed argument is an integer.
You can use any mathematical operator or functions defined in the Math object.
function is_integer(num)
{
  if(isNaN(num))
    {
      console.log(num+ " Is not a Number");
    }
  
  else
    {
     console.log(num+ " Is  a Number");
    }
}


is_integer(10);

5.Using the forEach function defined for an array, find the sum of the array of numbers. [ function
add_all(arr) {...} ]
function add_add(arr)
{
  var sum=0;
  for(var i in arr)
    {
      sum+=arr[i];
    }
  return sum;
}

arr=[1,2,3,4,5];
add_add(arr);

6.Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. [ Use the
formula : c/5 = (f-32)/9, where c = temperature in celsius and f = temperature in fahrenheit]
function Celcius(f)
{
 return (5/9) * (f-32);
}
Celcius(77);
==============================

function Fahrenheit(c)
{
 return ((c*1.8)+32);
}

Fahrenheit(100);

7.Write a factorial function that returns the factorial of a given number, n. Make sure you return the
calculated value and not just print it. [ function factorial(n){...} ]

function factorial(n){
var fact=1;
for(var i =n;i>1;i--)
{
fact=fact*i;
}
return fact;
}

factorial(5);
120


8.Write a javascript function that converts a given amount of money into coins of denominations (1,
2, 5, 10 and 25). [ function convert_to_coins(amount) {...} ]. You may choose to print the coin
denominations used on the console. E.g. convert_to_coins(87) should print 25 25 25 10 2.


function convert_to_Coins(amount){
           var  tf = amount/25;   // tf=3
            amount = amount % 25; // amount=12
            var tn = amount/10; // tn=1
            amount = amount % 10; //amount=2
            var F = amount/5;
            amount = amount % 5;
            var t = amount/2;
            amount = amount % 2;
            console.log("Rs.25 Coins: "+Math.floor(tf));
            console.log("Rs.10 Coins: "+Math.floor(tn));
            console.log("Rs.5 Coins: "+Math.floor(F));
            console.log("Rs.2 Coins: "+Math.floor(t));
            console.log("Rs.1 Coins: "+Math.floor(amount));
}

convert_to_Coins(87);
