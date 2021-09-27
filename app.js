"use strict";

let i = prompt("введите число", 1000)
for (; i>0; )
{ 
    (i > 0) ? (console.log(i), i = i-7) : 
    (i < 0) ? (console.log("значение меньше 0")) :"";
};
