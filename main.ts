#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyanBright.bold("Welcome to Currency Converter"));
let exchangeRate: any = {
    "USD": 1, // base currency
    "PKR": 278, // Pakistani Rupee
    "AFR": 71, // Afghani Rupee
    "ASD": 1.52, // Australian Dollar
    "BHD": 0.38, // Bahrani Dinar
    "BDT": 109.38, // Bangladeshi Tikka
    "BZR": 5.07, // Brazilian Real
    "BRD": 1.35, // Brunei Dollar
    "CND": 1.36, // Canadian Dollar
    "CHY": 7.23, // Chinese Yuan
    "EGP": 47.60, // Egyptian Pound
    "Euro": 0.92, // Euro
    "HKD": 7.83, // Hong Kong Dollar
    "INR": 83.32, // Indian Rupee
    "IDR": 15916, // Indonesian Rupiah
    "IRR": 42075, // Irani Riyal
    "INS": 3.71, // Israli New Shakel
    "JPY": 151.88, // Japnese Yen
    "KWD": 0.31, // Kuwaiti Dinar
    "MLR": 4.75, // Malaysian Ringgit
    "NPR": 133.35, // Nepalese Rupee
    "RUB": 92.58, // Russian Ruble
    "SAR": 3.75, // Saudi Arabia Riyal
    "AED": 3.67, // Arab Emirates Darham
    "GBP": 0.79, // Great Bretain Pound
};
let userAnswers = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "Select the currency you want to converted from",
        choices: ["USD", "PKR", "AFR", "ASD", "BHD", "BDT", "BZR", "BRD", "CND", "CHY","EGP", "Euro", "HKD","INR", "IDR", "IRR", "INS", "JPY", "KWD", "MLR", "NPR", "RUB", "SAR","AED","GBP"],
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Select the currency you want to converted into",
        choices: ["USD", "PKR", "AFR", "ASD", "BHD", "BDT", "BZR", "BRD", "CND", "CHY","EGP", "Euro", "HKD","INR", "IDR", "IRR", "INS", "JPY", "KWD", "MLR", "NPR", "RUB", "SAR","AED","GBP"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter you amount",
    }
]);
let fromamount = exchangeRate[userAnswers.fromCurrency]
let toamount = exchangeRate[userAnswers.toCurrency]
let amount = userAnswers.amount
let baseCurrency = amount/fromamount
let convertedCurrency = baseCurrency*toamount
let fixedCurrency = convertedCurrency.toFixed(2)
console.log(fixedCurrency);
