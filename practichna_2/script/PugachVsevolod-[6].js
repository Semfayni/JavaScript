const temperature = Number(prompt("Введіть температуру кімнати"));
const sensorError = prompt("Чи є помилка сенсора? (true/false)");

if(sensorError === 'true'){
    console.log("Помилка датчика температури");
    alert("Помилка датчика температури");
} else{
    if(temperature < 18){
        console.log("Увімкнути обігрів");
        alert("Увімкнути обігрів");
    } else if(temperature >= 18 && temperature <= 25){
        console.log("Температура комфортна");
        alert("Температура комфортна");
    } else{
        console.log("Увімкнути кондиціонер");
        alert("Увімкнути кондиціонер");
    }
}
