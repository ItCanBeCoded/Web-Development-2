var output = [];
var count = 1;
var buzzy = "";

function fizzbuzz(){
    
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
    console.log(output);

}

for(var j = 0; j < 10; j++){
fizzbuzz();

}

//This is a test 2

