let a = +prompt(),
b = +prompt();

console.log(a,b)

function sameNums() {
let c = a + b;
if (c > 10) {
    console.log('Результат больше 10 ' + 'рузельтат равен '+ c); 
} else if(c=10){
    console.log("Результат равен " + c)
}
else {
    console.log("Результат меньше 10 " + "Результат равен " + c);
};


}

sameNums();