function parking (input) {

    let days = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let price = 0;
    let total = 0; 

    for (let i = 1; i <= days; i++ ) {
        for (j = 1; j <= hoursPerDay; j++) {
    
    if (i % 2 == 0 && j % 2 == 1) {
        price +=  2.5;
    }
    else if (i % 2 == 1 && j % 2 == 0) {
        price += 1.25;
    }
    else {
        price += 1;
     }
    }
    total += price;
    console.log(`Day: ${i} - ${price.toFixed(2)} leva`);
    price = 0;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}
parking (['2','5'])
