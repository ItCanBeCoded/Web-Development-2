function fibonacciGenerator(n){
    var fibo = [0];
    var a = 0;
    var b = 1;
    var printy = true;
    for(var i = 1; i < n-1; i++ ){
        if(n === 1){
    
        }
        else if(n === 2){
        fibo.push(1);
        
        }
        else {
        if(printy === true){
            fibo.push(1);
            printy = false;
        }
        var c = a + b;
        fibo.push(c);
        a = b;
        b = c;
        
        
        }
    }

    if(n === 2){
        fibo.push(1);
    }
    console.log(fibo)

}

fibonacciGenerator(100);


function fiboGen2(n){
    var output = [];
    if (n === 1){
        output = [0];
    }
    else if (n === 2){
        output = [0,1];
    }
    else {
        output = [0,1];
        for (var i = 2; i < n; i++){
        output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    
    return output;

}