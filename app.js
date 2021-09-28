"use strict"

/*let student = 
{
    name: prompt("введите имя", "Ярик"),
    age: prompt("введите возраст", 19),
    otchislen: true,
}
console.log(student.name, student.age, student.otchislen)
//(otchislen == false) ? let i = prompt("введите количство дней службы в армии", 570) : ; 
let i = prompt("введите количство дней службы в армии", 570)

for ( ; i > 0; )
{
    (i > 0) ? (console.log(i), i = i - 1) : console.log("поздравляю");
};*/

let i = prompt("введите число", 1000)
for (; i>0; )
{ 
    (i > 0) ? (console.log(i), i = i-7) : 
    (i < 0) ? (console.log("значение меньше 0")) :"";
};

