const score = prompt("Введіть кількість набраних балів");
const homeworkDone = prompt("Всі домашні завдання виконані (true/false)");
const finalTestPassed = prompt("Чи пройдено фінальний тест (true/false)");

if(score >= 70 && score <=100 && homeworkDone === 'true' && finalTestPassed === 'true'){
    console.log("Сертифікат успішно отримано");
    alert("Сертифікат успішно отримано");
} else{
    console.log("Умови для отримання сертифіката не виконані");
    alert("Умови для отримання сертифіката не виконані");
}