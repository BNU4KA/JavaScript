"use strict"
let money = prompt("ваш бюджет на месяц: ")
let time = prompt("введите дату в формате YYYY-MM-DD")
let appData = 
{
    budget = money,
    timeData = time,
    expenses,
    optionalExpenses,
    income = [],
    savins = false,
}
