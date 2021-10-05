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
console.log(getRandomInt(0, 10));