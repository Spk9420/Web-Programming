1) With example illustrate variable and function closure in javascript.

var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter;}
})();
undefined
add();
1
add();
2
add();
3


2) Write a javascript function named reverse which takes a string argument and returns the
reversed string.


function reverse(){

var str = "My Name is komal";
var rev_str="";
for(var i = str.length-1;i>=0;i--)
{
rev_str=rev_str+str[i];
}
return rev_str;
}


reverse();

"jariV si emaN yM"

3) Given a javascript array of objects having a radius property as shown [{radius: 5}, {radius: 9},
{radius: 2}] , write a comparator function to sort it.


var circleArr = [
            {radius: 5},
            {radius: 9},
            {radius: 2}
        ];

        circleArr.sort(function (a, b)
            {
                return a.radius - b.radius;
            });
(3) [{…}, {…}, {…}]
0: {radius: 2}
1: {radius: 5}
2: {radius: 9}


4)  Write a Javascript program to sort elements of an array using sorting algorithm

var arr = [10,4,2,1,5,7,9];
function sor_arr(arr)
{
    var temp=0;
    var i,j;
    for(i=0;i<arr.length-1;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
sor_arr(arr);
[1, 2, 4, 5, 7, 9, 10]


5) Write a javascript function named length_of_array , which takes an array as argument and
returns the number of elements in that array (as opposed to what is given by the length
property of the array). Remember undefined can also be an element if it is explicitly set at some
index, e.g. x[5] = undefined; . This undefined should be counted, but elements which are not
present in the array (as arrays can be sparse), should not be counted.


 function length_of_array(arr)
        {
            var count = arr.filter(function (x)
                    {
                        if(x != "" || x != null)
                            return true;
                        else
                            return false;
                    });
            return count.length;
        }

        var array1 = [2,,8,5,9,,6,,undefined,1,0,null,3];

length_of_array(array1);

10



