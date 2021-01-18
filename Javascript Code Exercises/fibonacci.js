function fibonacciGenerator(n){
    var fibo = [0];
    var a = 0;
    var b = 1;
    var printy = true;
    for(var i = 1; i < n; i++ ){
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
        fibo.push(c)
        var a = b;
        var b = c;
        
        
        }
    }
    console.log(fibo)

}

fibonacciGenerator(20);