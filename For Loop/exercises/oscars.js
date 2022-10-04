function oscars (input){

    let name = input[0];
    let FirstPoints = input[1];
    let n = input[2];

    let arbiter;
    let arbiterPoints = 0.00;
    let points = FirstPoints;
    
    for (let index = 3; index <= n*2+2; index+=2) {
        arbiter = input[index];
        arbiterPoints = input[index+1];
        points = points+ ((arbiter.length* arbiterPoints)/2);
      //  console.log(index,arbiter,arbiter.length,arbiterPoints,((arbiter.length* arbiterPoints)/2),points);
    }
    if (points >= 1250.50) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${(points).toFixed(1)}!`);
    }
    else {
        console.log(`Sorry, ${name} you need ${(1250.50-points).toFixed(1)} more!`);
    }
    
    
}


oscars(["Zahari Baharov", 205, 4,
"Johnny Depp",45,
"Will Smith",29,
"Jet Lee",10,
"Matthew Mcconaughey",39])
