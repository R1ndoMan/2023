// let a = +prompt(),
//     b = +prompt();

// console.log(a,b);

// function sameNums() {
//     let c = a + b;
//     if (c > 10) {
//         console.log('Результат больше 10 ' + 'рузельтат равен '+ c); 
//     } else if (c == 10){
//         console.log("Результат равен " + c);
//     } else if (c < 10) {
//         console.log("Результат меньше 10 " + "Результат равен " + c);
//     }
// }

// sameNums();




// async function sumData(callback) {
//     const a = 10, b = 20;
//     let sum = a + b;
//     callback(sum)
// }

// function sumedData(data) {
//     console.log("сумма составила" + data)
// }

// sumData(sumedData);



// async function firstStage(callback) {
//     let firstNumber = 64, 
//     secondNumber = 128;
//     let sum = firstNumber + secondNumber;
//     callback(sum)
// }

// function resulte(data) {
//     console.log("сумма подчетов составила " + data)
// }

// firstStage(resulte)



// function funcN1() {
//     console.log("Функция 1")
// }

// function funcN2() {
//     console.log("Функция 2")
// }

// function funcN3() {
//     console.log("Функция 3")
// }

// function myCallback() {
//     funcN1();
//     setTimeout(funcN2, 3000);
//     setTimeout(funcN3, 6000);
// }

// function runMyCallbacks() {
//     myCallback(funcN1, funcN2, funcN3);
// }

// runMyCallbacks()





// Объект с 10 свойствами
const myObj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  prop4: "value4",
  prop5: "value5",
  prop6: "value6",
  prop7: "value7",
  prop8: "value8",
  prop9: "value9",
  prop10: "value10",
};

// Массив с 10 элементами
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Human {
    constructor(name, age, sex) {
        this.name = name,
        this.age = age,
        this.sex = sex
    }
    counter(){
        myArr.forEach((e)=> {
        
            if (e > 5) {
                console.log(`Мы перешли за границу 5 и теперь ${e} равен`)
            } else {
                console.log(`Идет перебор на данный момент ${e}`)
            }
        
        });
    }
}

class Worker extends Human {
    constructor(name, age, sex){
        super(name, age)
        this.sex = sex;
    }
}

const worker = new Worker('Ermek', 32, "men");
console.log(worker.name);
console.log(worker.age);
console.log(worker.sex);
worker.counter();