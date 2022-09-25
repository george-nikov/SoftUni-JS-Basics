function fruitShop(input) {

    let fruit = input[0];
    let dayOfWeek = input[1];
    let amount = input[2];
    let price = 0;
    let flagError = false;

    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    price = amount * 2.50;
                    break;
                case "apple":
                    price = amount * 1.20;
                    break;
                case "orange":
                    price = amount * 0.85;
                    break;
                case "grapefruit":
                    price = amount * 1.45;
                    break;
                case "kiwi":
                    price = amount * 2.70;
                    break;
                case "pineapple":
                    price = amount * 5.50;
                    break;
                case "grapes":
                    price = amount * 3.85;
                    break;

                default:
                    flagError = true;
                    break;
            }

            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana":
                    price = amount * 2.70;
                    break;
                case "apple":
                    price = amount * 1.25;
                    break;
                case "orange":
                    price = amount * 0.90;
                    break;
                case "grapefruit":
                    price = amount * 1.60;
                    break;
                case "kiwi":
                    price = amount * 3.00;
                    break;
                case "pineapple":
                    price = amount * 5.60;
                    break;
                case "grapes":
                    price = amount * 4.20;
                    break;
                default:
                flagError = true;
                    break;
            }
            break;
            default:
                flagError = true;
    }
    if (flagError = true){
        console.log("error")
    }
    else {
        console.log(price.toFixed(2));

    }


}


fruitShop(["apple", "Tuesday", "2"])
