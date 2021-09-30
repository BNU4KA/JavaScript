"use strict"
let money = prompt("ваш бюджет на месяц: ", 1000)
let time = prompt("введите дату в формате YYYY-MM-DD", "2010-02-12")

let appData = 
{
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "пустой объект",
    income: [],
    savings: false,
};

let trets, cost

for (let i = 0; i < 1; i++)
{
    trets = prompt("введите обязатеьную статью расходов в этом месяце", "пиво, водка, сигареты");
    cost = prompt("введите во сколько это обойдется", 100)
};

appData.expenses.trets = cost
let exitData = ((appData.budget)/30).toFixed(1)
alert("ваш бюджет на один день " +  (exitData))