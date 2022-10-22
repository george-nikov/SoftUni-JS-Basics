function tourist (input) {

    let budget = Number(input[0]);
    let index = 1;
    let current = input[index];
    let price = 0;
    let counter = 0;
    let sum = 0;
 
    while (current !== "Stop") {
        index++;
        price = Number(input[index]);
        if (index % 6 == 0){
        price = price / 2;
        }
        if (price > budget) {
            let left = price - budget;
            console.log(`You don't have enough money!`);
            console.log(`You need ${left.toFixed(2)} leva!`);
            break;
        }
        budget -= price;
        sum += price;
        counter++;
        index++;
        current = input[index];
    }

    if (current == "Stop") {
        console.log(`You bought ${counter} products for ${sum.toFixed(2)} leva.`);
    }
}
tourist (['153.20'
    ,'Backpack'
    ,'25.20'
    ,'Shoes'
    ,'54'
    ,'Sunglasses'
    ,'30'
    ,'Stop'
    ])
