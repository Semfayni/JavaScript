// false
// 0
// 0n
// ""
// null
// undefined
// NaN

// if(umova){
//     [instruction if True];
//     [instruction if True];
//     [instruction if True];
// }else if(umova){
//     [instruction if True];
//     [instruction if True];
// }else{
//     [instruction if False];
// }

// Operator porivnyannya
// ==
// !=
// >
// <
// >=
// <=
// ===
// !==

// let a = 3, b ='3';
// console.log(a === b);
// let a = prompt("Enter first number");
// let b = prompt("Enter second number");
// let c;
// if (a > b) {
//     c = "a > b";
// }else if (a < b) {
//     c = "a < b";
// }else{
//     c = "a == b"
// }
// alert(c);

// let a = prompt("Enter first number");
// let b = prompt("Enter second number");
// let c;
// if (a>b)c = "a > b";
// else if (a<b)c = "a < b";
// else c = "a == b";
// alert(c);

//umova switch
// let course =prompt("What is the name of the course?"), title;
//
// switch (course) {
//     case "figma":
//         title = 'UI/UX'
//         break;
//
//     case 'Python':
//         title = 'Programming';
//         break;
//
//     case 'frontend':
//     case "css":
//     case "html":
//         title = "web programming";
//         break;
//
//     // default:
//     //     title = "idk";
//     //     break;
// }
// alert(title);

//logichi operatory

// let a = 'false';
// let b = false;
// let c = true;
// console.log(!a);
// console.log(!!a); //zaperechennya dlya string
// console.log(a && c);
// console.log(a || c);

// let age = prompt("What is your age?"), info;
// if(age<18){
//     info ="no pivo"
// }else if(age>=18 && age < 35){
//     info = "prizivnoy"
// }else{
//     info ="sche ye shans"
// }
// alert(info)

let name = prompt('What is your name?');
let greeting = `Congratulations, ${name || "гість"}!`
alert(greeting);
