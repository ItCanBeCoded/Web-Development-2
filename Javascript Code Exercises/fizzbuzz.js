var output = [];
var count = 1;
var buzzy = "";

function fizzbuzz(){

    while(count <= 100){
    
    if ((count%3 === 0) && (count%5 === 0)){
        buzzy = "fizzbuzz";
        output.push(buzzy);
    }
    if ((count%3 === 0) && (count%5 !== 0)){
        buzzy = "fizz";
        output.push(buzzy);
    }
     if ((count%3 !== 0) && (count%5 === 0)){
        buzzy = "buzz";
        output.push(buzzy);
    }
    if ((count%3 !==0) && (count%5 !==0)){
        output.push(count);
    }

    count++;
   

}

console.log(output);

}

fizzbuzz();

// for(var j = 0; j < 16; j++){
// fizzbuzz();

// }



