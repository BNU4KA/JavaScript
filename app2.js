"use strict"
let money = prompt("ваш бюджет на месяц: ", 1000)
let time = prompt("введите дату в формате YYYY-MM-DD", "2010-02-12")

let trets;
let cost;

for (let i = 0; i < 1; i++)
{
    trets = prompt("введите обязатеьную статью расходов в этом месяце", "пиво, водка, сигареты");
    cost = prompt("введите во сколько это обойдется", 100)
};

let appData = 
{
    budget: money,
    timeData: time,
    expenses: 
    {
        trets: cost,
    },
    optionalExpenses: "пустой объект",
    income: [],
    savings: false,
};

alert("ваш бюджет на один день " +  ((appData.budget - cost)/30))

