const isAuthorized = prompt("Юзер авторизований? (true/false)");
const internetSpeed = prompt("Введіть швидкість інтернета (Мб/с)");
const isBanned = prompt("Аккаунт в бані? (true/false)");

if(isAuthorized === 'true' && internetSpeed >= 20 && isBanned === 'false'){
    console.log("Доступ до онлайну дозволений");
    alert("Доступ до онлайну дозволений");
} else{
    console.log("Доступ відмовлено");
    alert("Доступ відмовлено");
}