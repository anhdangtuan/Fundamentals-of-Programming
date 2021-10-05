// // exercise 2. Into Ziff Zubb




// function ziffZubb(start, end) {
//     for(let i= start; i <= end; i++ ){
//         if (i % 5 ===0 && i % 3 ===0){
//             console.log(`ZiffZubb`);
//         }else if (i % 3 ===0){
//             console.log(`Ziff`);
//         }else if ( i % 5 ===0){
//             console.log(`Zubb`)
//         } else{

    
//             console.log(i);
//         }
//     }          
// }    
// //   example
// ziffZubb(1, 40);

//// exercise 3
// ------------------------------------------------------
// function gcd(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number')) 
//       return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while(y) {
//       var t = y;
//       y = x % y;
//       x = t;
//     }
//     return x;
//   }
  
//   console.log(gcd(15, 7));
// -----------------------------------------------------
    // function gcd(num1, num2){
    //     let j = 1;
    //     let min = num1 > num2 ? num2 : num1;
        // let min;             |
        // if (num1 > num2){    |
        //     min =  num2;     |                   
                                //or  
        // }else {              |
        //     min = num1;      |
        // }                    |
        
//         for (let i = 0; i <= num1; i++){
//             if (num1 % i === 0 && num2 % i === 0){
                
//                 j = i;
                
//             }
//         }
//         return j; 
//     }

// let a = gcd(6, 8);
// console.log(a);
// ----------------------------------------------------------
// exercise 4

// let lcm = (num1, num2) => {
//     let max = num1 > num2 ? num1 : num2;
//     let min = num1 < num2 ? num1 : num2;
  
//     let lcm = max;
  
//     while (lcm % min !== 0) {
//       lcm += max;
//     }
  
//     return lcm;
//   };
  
//   console.log(lcm(15, 20));
  

// ------------------------------

    // function isPrime(n)  {
    //     for (let i = 2; i < n; i++) {
    //         if(n % i === 0) {
    //             console.log(i);
    //             return false;
    //         }
    //     }
    //     return n > 1;
    // }



//     let a = isPrime(1);
//     console.log(a);
// // -----------------------------------------
// 6. Capture Time

// let ngayGio = new Date(1970, 01, 01 , 2, 0, 0, 0); 
// console.log(ngayGio);
// console.log("Giờ Hiện Tại là: " + ngayGio.getHours());
// console.log("Phút Hiện Tại là: " + ngayGio.getMinutes());


// let ngayGio = new Date()
// console.log()
// let ngayGio = new Date(1994, 14, 05);
// console.log("Năm Hiện Tại là: " + ngayGio.getFullYear()); 
// let yourAgeInMilliseconds = Date.now() -  ngayGio
// console.log(`tuoi cua ban la ${yourAgeInMilliseconds}`);
// ----------------------------------------
// 7. Advanced Random Number


function getRandom() {
    return Math.random();
  }
// console.log(getRandom());

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
// console.log(getRandomInt(0, 10));

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(getRandomInt(0, 10));




function getRandomItem(arr){
  return arr[Math.floor(Math.random()*arr.length)];

     }

// var arr = [254, 45, 212, 365, 2543];
// console.log(getRandomItem(arr));
// console.log(arr.length);
// ---------------------------------
// for (var i = 0; i < 10; i++) {
//     var s = "";
//     for (var j = 0; j < 10; j++) {
//       s = `${s} outer ${i} inner ${j}`;
//     }
//     console.log(s);
//   }
// --------------------------------------8. Nested For Loop
function multiplyAll(arr) {
    let product = 5;
    
    for (let i = 0; i < arr.length; i++)
          

    {
      for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
      }
    }
    
    return product;
  }
  
//   multiplyAll(1);
  




// --------------------------------  9. Iterate over Arrays
// var fruits = ["apples", "oranges", "bananas"];

// function listFruits() {
//   for (var i = 0; i < fruits.length; i++) {
//     console.log("I have some " + fruits[i]);
//   }
// }
// listFruits();

var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
function payEachDay() {
    for (var i = 0; i < 10; i++) {
        var num = i;
        imcome = num * 25;
    console.log("Peter earned" + workingHours[i]*25 + "$ today");
    }
  }
// payEachDay();


function  total(){
var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
var toTalSalary = 0;
for (var i = 0; i < workingHours.length; i++){
    var salary = workingHours[i] *25;
    toTalSalary += salary;
    console.log(`Peter earned $${salary} today`);
    
    
    }
console.log(`Peter has earned $${toTalSalary} in total`);
}
// total();

function  toTalMoney(){
var year = [];
for (let index = 0; index < 250; index++) {
  function getRandomIntBet(start, end) {
    between = Math.floor(Math.random() * (end - start) + start);
    return year.push(between);
  }
  getRandomIntBet(6, 8);
}
year;
console.log(year);
var workingHoursYear = year.reduce(add, 0);
function add(acc, number) {
  return acc + number;
}
console.log(workingHoursYear * 25);
}

// console.log(toTalMoney());



// -----------------------------------------10. Truthy/Falsy

// const one = 1;

// if (one) {
//   console.log("Is truthy");
// }
// -------------------
// const zero = 0;

// if (zero) {
//   console.log("Is truthy");
// } else {
//   console.log("Isn't truth");
// }
