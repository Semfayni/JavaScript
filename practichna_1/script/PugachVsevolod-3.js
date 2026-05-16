let balance = Number(prompt("Введіть баланс на початок кварталу (UAH):"));

const rate1 = 43.7;
const rate2 = rate1 + 1;
const rate3 = rate2 + 1;
const amount_1 = Number(prompt("Введіть дохід за 1-й місяць (UAH):"));
const amount_2 = Number(prompt("Введіть дохід за 2-й місяць (USD):")) * rate2;
const amount_3 = Number(prompt("Введіть дохід за 3-й місяць (USD):")) * rate3;
const totalIncome = amount_1 + amount_2 + amount_3;
const monthlyFixedExpenses = 3500 + 4000;
const netflixTotal = (9.99 * rate1) + (9.99 * rate2) + (9.99 * rate3);
const totalExpenses = (monthlyFixedExpenses * 3) + netflixTotal;
const totalTaxes = 4500 + (totalIncome * 0.05);

balance = balance + totalIncome - totalExpenses - totalTaxes;

console.log(`В цьому кварталі Максим витратив ${totalExpenses} грн`);
console.log(`Загальний дохід Максима за квартал становить ${totalIncome} грн`);
console.log(`Загальна сума податків становить ${totalTaxes} грн`);
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${balance} грн`);