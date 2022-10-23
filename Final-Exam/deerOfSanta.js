function deerOfSanta (input) {

    let days = Number(input[0]);
    let foodTotal = Number(input[1]);
    let foodFirst = Number(input[2]);
    let foodSecond = Number(input[3]);
    let foodThird = Number(input[4]);

        let first = days * foodFirst;
        let second = days * foodSecond;
        let third = days * foodThird;

       let totalFoodNeeded = first + second + third;

    if (totalFoodNeeded > foodTotal) {    
        console.log(`${Math.ceil(totalFoodNeeded - foodTotal)} more kilos of food are needed.`); 
    }
    else if (totalFoodNeeded < foodTotal) {
        console.log(`${Math.floor(foodTotal-totalFoodNeeded)} kilos of food left.`);
     }
}
deerOfSanta (['2'
    ,'10'
    ,'1'
    ,'1'
    ,'2'
    ])
