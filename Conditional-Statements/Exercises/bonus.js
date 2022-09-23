function points (input){
    const a = Number(input[0]);
    let bonus = 0;

    if (a <= 100){
        bonus = 5;
    }
    
    else if (a<1000){
        bonus = (a*0.20);
    }

    else {
        bonus = (a*0.10);
    }


    if (a % 2 === 0){
        bonus = bonus+1;
    }
    else if (a % 10===5){
        bonus = bonus+5;
    }

    console.log(bonus)
    console.log(a+bonus)


}

points(["20"])
