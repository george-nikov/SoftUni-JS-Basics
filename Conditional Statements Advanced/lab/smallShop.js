function smallShop(input) {

    let productName = input[0];
    let cityName = input[1];
    let quantity = Number(input[2]);

    let finalSum = 0;

    if (cityName === "Sofia") {
        switch (productName) {
            case "coffee":
                finalSum = quantity * 0.5;
                break;

            case "water":
                finalSum = quantity * 0.8;
                break;

            case "beer":
                finalSum = quantity * 1.20;
                break;

            case "sweets":
                finalSum = quantity * 1.45;
                break;

            case "peanuts":
                finalSum = quantity * 1.60;
                break;
        }
    }

    if (cityName === "Plovdiv") {
        switch (productName) {
            case "coffee":
                finalSum = quantity * 0.4;
                break;

            case "water":
                finalSum = quantity * 0.7;
                break;

            case "beer":
                finalSum = quantity * 1.15;
                break;

            case "sweets":
                finalSum = quantity * 1.30;
                break;

            case "peanuts":
                finalSum = quantity * 1.50;
                break;
        }
    }

    if (cityName === "Varna") {
        switch (productName) {
            case "coffee":
                finalSum = quantity * 0.45;
                break;

            case "water":
                finalSum = quantity * 0.7;
                break;

            case "beer":
                finalSum = quantity * 1.10;
                break;

            case "sweets":
                finalSum = quantity * 1.35;
                break;

            case "peanuts":
                finalSum = quantity * 1.55;
                break;
        }
    }

       console.log(finalSum.toPrecision(4));
}

smallShop(["beer","Sofia","6"])





