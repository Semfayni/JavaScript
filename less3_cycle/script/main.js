// Task 1
for(let i = 1; i <= 10; i++){
    console.log(i);
    alert(i);
}

// Task 2
const n2 = Number(prompt("Введіть число для пошуку парних чисел"));
for(let i = 2; i <= n2; i += 2){
    console.log(i);
    alert(i);
}

// Task 3
const n3 = Number(prompt("Введіть число для обчислення суми"));
let sum = 0;
for(let i = 1; i <= n3; i++){
    sum += i;
}
console.log(sum);
alert(sum);

// Task 4
const n4 = Number(prompt("Введіть число для зворотного відліку"));
for(let i = n4; i >= 1; i--){
    console.log(i);
    alert(i);
}

// Task 5
const n5 = Number(prompt("Введіть число для таблиці множення"));
let table = "";
for(let i = 1; i <= 10; i++){
    table += `${n5} x ${i} = ${n5 * i}\n`;
}
console.log(table);
alert(table);

// Task 6
let password;
const correctPassword = "admin123";
do{
    password = prompt("Введіть пароль");
    if(password !== correctPassword){
        console.log("Неправильний пароль");
        alert("Неправильний пароль");
    }
} while(password !== correctPassword);
console.log("Пароль правильний");
alert("Пароль правильний");

// Task 7
let success = false;
const attempts = 3;
for(let i = 1; i <= attempts; i++){
    let passTry = prompt(`Введіть пароль (у вас 3 спроби)`);
    if(passTry === "admin123"){
        console.log("Доступ дозволено");
        alert("Доступ дозволено");
        success = true;
        break;
    } else{
        console.log("Неправильний пароль");
        alert("Неправильний пароль");
    }
}
if(!success){
    console.log("Доступ заблоковано")
    alert("Доступ заблоковано");
}

// Task 8
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
    alert(i);
}

// Task 9
const n9 = prompt("Введіть число, щоб дізнатися кількість цифр");
let digitCount = 0;
for(let i = 0; i < n9.length; i++) {
    digitCount++;
}
console.log(digitCount);
alert(digitCount);
//взагалі-то це завдання вирішується ще до циклу використавши n9.length

// Task 10
const secretNumber = 3010;
let userGuess;

while(true){
    userGuess = Number(prompt("Спробуйте вгадати число"));
    if(userGuess < secretNumber){
        console.log("Більше");
        alert("Більше");
    } else if(userGuess > secretNumber){
        console.log("Менше");
        alert("Менше");
    } else if(userGuess === secretNumber){
        console.log("Ви вгадали!");
        alert("Ви вгадали!");
        break;
    } else{
        console.log("Введіть коректний тип даних");
        alert("Введіть коректний тип даних");
    }
}