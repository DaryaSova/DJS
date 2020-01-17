// {
//     "esversion"; 6
//   }
// let arr = ['plum.png', 'orande.jpg', 'apple.bmp'];

// console.log(arr[1]);

// // alert("Hello world")

// // let answer = confirm("Are you here?");

// // console.log(anser);

// let answer = +prompt("Есть ли вам 18?" , "Да");  

// console.log(typeof(answer)); // выводим то что ввел юзер

// // console.log("arr" + " - object");
// console.log(4 + +" - object");

// let incr = 10,
//     decr = 10;

    

// console.log(incr++);
// console.log(decr--);

// console.log("3" == 2);
// console.log("2" === 2);

// let isCheked = true;
// let isClose = false;
// console.log(isCheked || isClose);

// let num = 50;

// if (num < 49) {
//     console.log("Не верно");
// } else if(num > 100) {
//     console.log("МНого!");
// } else {
//     console.log("Верно!");
// }

// (num == 50) ? console.log("Верно!") : console.log("НЕверно!");

// switch (num) {
//     case num < 49: 
//         console.log("Не верно");
//         break;
//     case num > 100:
//         console.log("Много!");
//         break;
//     case num > 80 : 
//         console.log("все еще много");
//         break;
//     case num == 50 : 
//         console.log("Верно");
//         break;    
//     default : 
//         console.log("что то пошлот не так");
//         break;  
// }   

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }
// var l = 10;

// function showFirstMessege(text) {
//     alert(text);
//     let num = 20;
// }

// showFirstMessege("Hello world");
// console.log(num);

// function calc (a,b) {
//     return(a + b);

// }

 let calc = (a, b) => a + b

console.log(calc(3,4));

function retVar() {
    let num = 5255;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length); //свойство length
console.log(str.toUpperCase());  // метод
console.log(str.toLowerCase());

let twelvw = "px12.2";
// console.log(Math.round(twelvw));
console.log(parseInt(twelvw));
console.log(parseFloat(twelvw));
