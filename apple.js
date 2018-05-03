let money = prompt('Сколько у Вас денег?');
let apple = prompt('Сколько Вы купили яблок?');
let bread = prompt('Сколько Вы купили батонов?');
let hmapple = prompt('Сколько стоит одно яблоко?');
let allapple = apple * hmapple;
let hmbread = prompt ('Сколько стоит один батон?');
let allbread = bread * hmbread;
let total = allapple + allbread;
document.body.innerText = money >= total;