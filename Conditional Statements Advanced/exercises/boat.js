function boat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermenCount = Number(input[2]);

    let price = 0;

    if (season === "Spring") {
        if (fishermenCount <= 6 && fishermenCount > 0) {
            price = 3000 * 0.9;
            if (fishermenCount % 2 == 0) {
                price = price * 0.95;
            }
        } else if (fishermenCount >= 7 && fishermenCount <= 11) {
            price = 3000 * 0.85;
            if (fishermenCount % 2 == 0) {
                price = price * 0.95;
            }
        } else if (fishermenCount >= 12) {
            price = 3000 * 0.75;
            if (fishermenCount % 2 == 0) {
                price = price * 0.95;
            }
        }
    } else if (season === "Summer") {
        if (fishermenCount <= 6 && fishermenCount > 0) 
        {
            price = 4200 * 0.9;
            if (fishermenCount % 2 == 0) 
            {
                price = price * 0.95;
            }
        } 
        else if (
            fishermenCount >= 7 &&
            fishermenCount <= 11 &&
            fishermenCount > 0
        ) 
        {
            price = 4200 * 0.85;
            if (fishermenCount % 2 == 0)
             {
                price = price * 0.95;
            }
        } else if (fishermenCount >= 12) {
            price = 4200 * 0.75;
            if (fishermenCount % 2 == 0) {
                price = price * 0.95;
            }
        }
    } else if (season === "Autumn") {
        if (fishermenCount <= 6 && fishermenCount > 0) {
            price = 4200 * 0.9;
        } else if (
            fishermenCount >= 7 &&
            fishermenCount <= 11 &&
            fishermenCount > 0
        ) {
            price = 4200 * 0.85;
        } else if (fishermenCount >= 12) {
            price = 4200 * 0.75;
        }
    } else if (season === "Winter") {
        if (fishermenCount <= 6 && fishermenCount > 0) {
            price = 2600 * 0.9;
            if (fishermenCount % 2 == 0) {
                price = price * 0.95;
            }
        } else if (
            fishermenCount >= 7 &&
            fishermenCount <= 11 &&
            fishermenCount > 0
        ) {
            price = 2600 * 0.85;
            if (fishermenCount % 2 == 0) {
                price = price * 0.95;
            }
        } else if (fishermenCount >= 12) {
            price = 2600 * 0.75;
            if (fishermenCount % 2 == 0) {
                price = price * 0.95;
            }
        }
    }

    let moneyLeft = budget - price;

    if (budget > price) {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(
            `Not enough money! You need ${Math.abs(moneyLeft).toFixed(2)} leva.`
        );
    }
}

boat(["2000", "Winter", "13"]);
