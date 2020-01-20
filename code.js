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

//  let calc = (a, b) => a + b

// console.log(calc(3,4));

// function retVar() {
//     let num = 5255;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length); //свойство length
// console.log(str.toUpperCase());  // метод
// console.log(str.toLowerCase());

// let twelvw = "px12.2";
// // console.log(Math.round(twelvw));
// console.log(parseInt(twelvw));
// console.log(parseFloat(twelvw));
// function first () {
//     setTimeout(function() {
//         console.log(1);
//     } , 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS (lang, callback) {
//     console.log("я учу " + lang);
//     callback();
// }



// function done () {
//     console.log("я прошел третий урок");
// }

// learnJS("Javasc", done);

// let obj = new Object();

// let option = {
//     width : 1024,
//     height : 1024,
//     name : "test"
// };

// console.log(option.name);

// option.bool = false;
// option.colors = {
//     border : "black",
//     bg : "red"
// }
// delete option.bool;

// console.log(option);

// for (let key in option) {
//     console.log("Свойство " + key + " Значение " + option[key]);
// }

// console.log(Object.keys(option).length); 

// let arr = ["first","second",5,10,9,5];

// console.log(arr.length);
// console.log(arr);
// arr.pop();
// arr.push("5");

// arr.shift();
// arr.unshift("1"); 
// for(let i = 0; i < arr.length; i++) {
//     console.log("номер элемента " + i + " значение " + arr[i]);
// }

// arr.forEach(function(i , mass) {
//     console.log(i  + ": " );
// });


// let mass = [1,3,4,5,7];

// for (let key in mass) {
//     console.log(key);
// }

// for (let key of mass) {
//     console.log(key);
// }

// // console.log(arr);


// let ans = prompt("ascniabcihacb"),
//     arr = [];

// arr = ans.split(",");
// console.log(arr);

// let arr = ["sjefnijnf", "sfiwwiwiwiwiiw", 5558];
//     i = arr.join(", ");
// console.log(i);

// let arr = [1,15,4];
//     i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// }    
// console.log(arr); 


//  let soldier = {
//      health : 400,
//      armor: 100
//  };

//  let john = {
//      health : 100
//  };

//  john.__proto__ = soldier;

//  console.log(john);
//  console.log(john.armor);

// function hello () {
//     console.log("Hello World!");
// }

// hello();

// function hi () {
//     console.log("Hello World");
// }

// hi();

// let arr = [1, 15 , 4 , 30 , 42],
//     i = arr.sort(compareNum);

// function compareNum (a,b) {
//     return a - b;
// }

// console.log(arr);

// 3 4 6 
// "string", 'string', `string`; 
// true / false 
// null // чего-то просто не существует 
// undefined // что-то существует, но значния никакого нет


// const obj = {
//     name: "Alex"
// }
//             0   1   2   3
// const arr = [1, 2, 5 , 6];

// - to String
// 1)
// console.log((typeof(String(4))));

// //2)

// console.log((typeof("q" + false)));
// console.log("http://vk.com/catalog/" + 5);


// // to Number

// // 1)
// console.log((typeof(Number(5 + "5"))));
// // 2)
 
// // 3)
// console.log((typeof(parseInt("15px", 10))));


// let ans = +promt("Hello ", "");


// 0 , '', null , undefined , NaN(число) // (false)
//  // 

//  // булева
//  // 1)
// let switcher = null;
// if (switcher) {
//     console.log("working ");
// }

// switcher = 5;
// if (switcher) {
//     console.log("working ");
// }

// // //2)
// // console.log((typeof(Boolean("5"))));
// // // 3)
// // console.log((typeof((!!"5"))));

let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = "blue";

btn[1].style.borderRadius = "100%";

circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "green";

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = "blue";
// }

// heart.forEach(function(item, i , herats) {
//     item.style.backgroundColor = "green";
// }) ;


let div = document.createElement("div"),
    text = document.createTextNode("Тут был текст");
    
div .classList.add("black");

// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = "<h1>hello world</h1>";
div.textContent = "hello world";


document.body.insertBefore(div, circle[0]);
// document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);


