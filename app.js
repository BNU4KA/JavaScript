"use strict"
//let student = {
//    name: prompt("введите имя", "Никита"),
//    age: prompt("введите возраст", "19"),
//    isMarried: confirm("вы женаты?"),
//};
//console.log(student);

let i = prompt("введите число", 1000)
for (; i>0; )
{ 
    (i > 0) ? (console.log(i), i = i-7) : 
    (i < 0) ? (console.log("значение меньше 0")) :"";
}

/*switch (i)
{
    case (i == 1000):
        console.log("много");
        break;
    case (i == 100):
        console.log("ближе");
        break;
    case (i == 10): 
        console.log("в точку");
        break;
    default:
        console.log("что-то пошло не так");
        break;
};*/