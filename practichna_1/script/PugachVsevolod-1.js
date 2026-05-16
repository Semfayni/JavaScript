const amount = Number(prompt("Введіть суму оплати за проєкт в доларах:"));
const exchangeRate = 43.7;
const bankCommission = 0.005;
const totalUah = amount * exchangeRate;
const finalAmount = totalUah - (totalUah * bankCommission);

console.log(`Після виконання проєкту, буде нараховано ${finalAmount} грн з урахуванням комісії банку!`);