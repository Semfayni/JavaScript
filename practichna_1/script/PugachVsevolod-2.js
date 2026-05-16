const usdRate = 43.7;
const esv = 4500;
const amount_1 = Number(prompt("Введіть дохід за 1-й місяць (UAH):"));
const amount_2 = Number(prompt("Введіть дохід за 2-й місяць (USD):")) * usdRate;
const amount_3 = Number(prompt("Введіть дохід за 3-й місяць (USD):")) * usdRate;
const amountTotal = amount_1 + amount_2 + amount_3;
const tax = (amountTotal * 0.05) + esv;

console.log(`Загальна сума доходу Максима складає ${amountTotal} грн.`);
console.log(`В кінці кварталу Максиму необхідно сплатити ${tax} грн.`);