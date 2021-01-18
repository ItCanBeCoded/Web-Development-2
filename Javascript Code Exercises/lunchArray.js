var names = ["steve","john","david","max","rick"]

function whosPaying(names){
    var buyer;
    var chance = Math.floor(Math.random()*10);
    if (chance < 3){
    buyer = names[0];
    }
    else if ((chance >2) && (chance <5)){
    buyer = names[1];
    }
    else if ((chance >4) && (chance <7)){
    buyer = names[2];
    }
    else if ((chance >6) && (chance <9)){
    buyer = names[3];
    }
    else {
    buyer = names[4];
    }
    console.log(buyer + " is going to buy lunch today!");
    //var message = buyer + " is going to buy lunch today!";
    //return message;
}

// for(var i = 0; i < 100; i++){

// whosPaying(names);

// }

function whoWillPay(names){

    var numPeople = names.length;
    var randomSpot = Math.floor(Math.random() * numPeople);
    var randPerson = names[randomSpot];

    console.log(randPerson + " is going to buy lunch today!");
}

for(var j = 0; j < 100; j++){

    whoWillPay(names);

}

//updated