"use strict"

let money, time

function start(value)
{
    money = +prompt("ваш бюджет на месяц: ", 1000);
    time = prompt("введите дату в формате YYYY-MM-DD", "2010-02-12");

    while(isNaN(money) || money == "" || money == null)
    {
        alert("вы ввели хрень")
        money = +prompt("Ваш бюджет на месяц: ", 1000);
    }
    console.log(money,time)
    return money,time;
}
//start();

let appData = 
{
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "пустой объект",
    income: [],
    savings: false,
};

function chooseExpensece()
{
    for (let i = 0; i < 1; i++)
    {
        let trets = prompt("введите обязатеьную статью расходов в этом месяце", 1)
        let cost = prompt("введите во сколько это обойдется", 1)
       
        if (typeof(trets) === 'string' && (typeof(trets)) != null && (typeof(cost)) != null && trets != "" && cost != "" && trets.length < 20) 
        {
            appData.expenses [trets] = cost;
            console.log("done");
        }
        else
        {
            i--;
        }
    }
    console.log(appData.money, appData.time)
}
//chooseExpensece();

appData.moneyPerDay = ((appData.budget)/30).toFixed(1)
//alert("ваш бюджет на один день " +  (appData.moneyPerDay))

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

function checkSavings() 
{
    savings = confirm("у вас есть сбережения? ")
    if (appData.savings == true)
    {
        let save = +prompt("сколько у вас денег на депозите?", 100),
            percent = +prompt("под какой процент?", 20)
            appData.monthIncome = save/100/12*percent;
            console.log(appData.monthIncome);
    }
}