const cities = ['Москва', 'Санкт-Петербург', 'Пятигорск', 'Владивосток'];
let temps = [];

//Получение температуры
for (let i = 0; i < cities.length; i++) {
    let city = prompt(`Введите температуру для города ${cities[i]}`);
    temps.push(Number(temps));
}
//for (let i = 0; i < temps.length; i++) document.write(temps[i]) + '';

/*let i = 0;
for (let city of cities) {
    city = prompt(`Введите температуру для города ${cities[i]}`);
    temps.push(Number(temps));
}*/
temps.sort(function (a, b) {
    return b - a;
});


let city1 = document.getElementById('city1');
city1.innerHTML = 'Температура в ' + ' ' + cities[0] + ':' + temps[0] + ' ' + 'C';

let city2 = document.getElementById('city2');
city2.innerHTML = 'Температура в ' + ' ' + cities[1] + ':' + temps[1] + ' ' + 'C';


let city3 = document.getElementById('city3');
city3.innerHTML = 'Температура в ' + ' ' + cities[2] + ':' + temps[2] + ' ' + 'C';

let city4 = document.getElementById('city4');
city4.innerHTML = 'Температура в ' + ' ' + cities[3] + ':' + temps[3] + ' ' + 'C';

let max = document.getElementById('max');
//max.innerHTML = temps[i];

let min = document.getElementById('min');
//min.innerHTML = temps[i];


//задание со звездочкой

let numbers = [];
for (i = -10; i <= 10; i++) {
    numbers.push(i);
}
document.write(numbers);

numbers.sort(function (a, b) {
    return a - b;
});

console.log(numbers);
