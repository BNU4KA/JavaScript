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
    trets = +prompt("введите обязатеьную статью расходов в этом месяце", 1);
    cost = prompt("введите во сколько это обойдется", 1)
   
    if ((typeof(trets)) === 'string' && (typeof(cost)) != null && (typeof(trets)) != null 
    && cost != '' && trets != '' && cost.length < 3) 
    {
        appData.expenses [trets] = cost
        console.log("done")
    }
    else
    {
        trets = +prompt("введите обязатеьную статью расходов в этом месяце", 1);
        cost = prompt("введите во сколько это обойдется", 1)
    }
};

appData.moneyPerDay = ((appData.budget)/30).toFixed(1)
alert("ваш бюджет на один день " +  (appData.moneyPerDay))

if (appData.moneyPerDay > 100)
{
    console.log("вы богатый")
}
else if (appData.moneyPerDay <= 100 && appData.moneyPerDay >= 50)
{
    console.log("вы среденего достатка")
}
else if (appData.moneyPerDay < 50)
{
    console.log("вы бедный")
}
else 
{
    console.log("какая-то хрень")
}