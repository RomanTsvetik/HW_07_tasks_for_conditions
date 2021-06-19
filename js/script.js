let a = prompt('Введите 1е число');
let b = prompt('Введите 2е число');

let result = (a == 0) ? console.log("Верно") : console.log("Неверно");   //1
result = (a > 0) ? console.log("Верно") : console.log("Неверно");        //2
result = (a < 0) ? console.log("Верно") : console.log("Неверно");        //3
result =  (a >= 0) ? console.log("Верно") : console.log("Неверно");      //4
result =  (a <= 0) ? console.log("Верно") : console.log("Неверно");      //5
result =  (a != 0) ? console.log("Верно") : console.log("Неверно");      //6
result = (a == "test") ? console.log("Верно") : console.log("Неверно");  //7
result = (a === "1") ? console.log("Верно") : console.log("Неверно");    //8
result = (a > 0 && a < 5) ? console.log("Верно") : console.log("Неверно"); //9

// 10
if (a == 0 || a == 2) {                                      
    console.log(a = Number(a) + 7);
} else {
    console.log(a /= 10);
}

//11
if (a <= 1 && b >= 3) {                                    
    console.log (result = +a + +b);
} else {
    console.log (result = +a - +b);
}

// 12, Вов, подскажи считается ли условие в данном случае читабельным или лучше через if..else делать?
result = (a > 2 && a < 11 || b >= 6 && b < 14) ? console.log("Верно") : console.log("Неверно"); 

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



