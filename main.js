#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyanBright.bold("Welcome to Currency Converter"));
let exchangeRate = {
    "USD": 1,
    "PKR": 278,
    "AFR": 71,
    "ASD": 1.52,
    "BHD": 0.38,
    "BDT": 109.38,
    "BZR": 5.07,
    "BRD": 1.35,
    "CND": 1.36,
    "CHY": 7.23,
    "EGP": 47.60,
    "Euro": 0.92,
    "HKD": 7.83,
    "INR": 83.32,
    "IDR": 15916,
    "IRR": 42075,
    "INS": 3.71,
    "JPY": 151.88,
    "KWD": 0.31,
    "MLR": 4.75,
    "NPR": 133.35,
    "RUB": 92.58,
    "SAR": 3.75,
    "AED": 3.67,
    "GBP": 0.79, // Great Bretain Pound
};
let userAnswers = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "Select the currency you want to converted from",
        choices: ["USD", "PKR", "AFR", "ASD", "BHD", "BDT", "BZR", "BRD", "CND", "CHY", "EGP", "Euro", "HKD", "INR", "IDR", "IRR", "INS", "JPY", "KWD", "MLR", "NPR", "RUB", "SAR", "AED", "GBP"],
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Select the currency you want to converted into",
        choices: ["USD", "PKR", "AFR", "ASD", "BHD", "BDT", "BZR", "BRD", "CND", "CHY", "EGP", "Euro", "HKD", "INR", "IDR", "IRR", "INS", "JPY", "KWD", "MLR", "NPR", "RUB", "SAR", "AED", "GBP"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter you amount",
    }
]);
let fromamount = exchangeRate[userAnswers.fromCurrency];
let toamount = exchangeRate[userAnswers.toCurrency];
let amount = userAnswers.amount;
let baseCurrency = amount / fromamount;
let convertedCurrency = baseCurrency * toamount;
let fixedCurrency = convertedCurrency.toFixed(2);
console.log(fixedCurrency);
