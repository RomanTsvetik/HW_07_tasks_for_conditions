let a = +prompt('Введите 1е число');
let b = +prompt('Введите 2е число');

//1
let result = (a == 0) ? console.log("Верно") : console.log("Неверно");

//2
result = (a > 0) ? console.log("Верно") : console.log("Неверно");        

//3
result = (a < 0) ? console.log("Верно") : console.log("Неверно");

//4
result = (a >= 0) ? console.log("Верно") : console.log("Неверно");

//5
result = (a <= 0) ? console.log("Верно") : console.log("Неверно");

//6
result =  (a != 0) ? console.log("Верно") : console.log("Неверно");      

//7
let z = prompt('Угадайте слово означающее "проверка"')
result = (z == "test") ? console.log("Верно") : console.log("Неверно");

//8
let c = prompt('Введите число для переменной С')
result = (c === "1") ? console.log("Верно") : console.log("Неверно");

//9
result = (a > 0 && a < 5) ? console.log("Верно") : console.log("Неверно"); 

// 10
result = (a == 0 || a == 2) ? console.log(a = a + 7) : console.log(a /= 10);

// 11
let A = +prompt('Введите новое 1е число для задания "11"');
let B = +prompt('А также новое 2е число');
result = (A <= 1 && B >= 3) ? console.log(result = A + B) : console.log(result = A - B);

// 12
let x = +prompt('Введите число для переменной "x"');
let y = +prompt('Введите число для переменной "y"');
let condition = x > 2 && x < 11 || y >= 6 && y < 14;
result = condition ? console.log("Верно") : console.log("Неверно"); 

//13
let num = prompt('Введите число от 1 до 4'); 

switch (num) {
    case '1':
        result = console.log('Зима');
        break;
    case '2':
        result = console.log('Весна');
        break;
    case '3':
        result = console.log('Лето');
        break;
    case '4':
        result = console.log('Осень');
        break;
    default:
        result = console.log('Нет такого времени года');
}



