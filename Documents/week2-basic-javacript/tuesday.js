// exercise 2. Into Ziff Zubb




function ziffZubb(start, end) {
    for(let i= start; i <= end; i++ ){
        if (i % 5 ===0 && i % 3 ===0){
            console.log(`ZiffZubb`);
        }else if (i % 3 ===0){
            console.log(`Ziff`);
        }else if ( i % 5 ===0){
            console.log(`Zubb`)
        } else{

    
            console.log(i);
        }
    }          
}    
//   example
ziffZubb(1, 20);