function skiTrip (input){

    let days = Number(input[0]);
    let type = input[1];
    let rate = input[2];
    let nights = Number(days - 1);

    let finalPrice = Number;


    switch (type){
        case "room for one person":
            finalPrice = nights * 18;
        break;

        case "apartment":
            if (days < 10){
            finalPrice = (nights * 25) * 0.70;
            }
            else if (days >= 10 && days <= 15){
                finalPrice = (nights * 25) * 0.65;
                }
                else if (days > 15){
                    finalPrice = (nights * 25) * 0.50;
                    }
        break;

        case "president apartment":
            if (days < 10){
                finalPrice = (nights * 35) * 0.90;
                }
                else if (days >= 10 && days <= 15){
                    finalPrice = (nights * 35) * 0.85;
                    }
                    else if (days > 15){
                        finalPrice = (nights * 35) * 0.80;
                        }
        break;
    }


    switch (rate){
        case "positive":
        finalPrice = finalPrice + finalPrice * 0.25;
        break;

        case "negative":
        finalPrice = finalPrice - finalPrice * 0.10;
        break;
    }

console.log(finalPrice.toFixed(2));

}

skiTrip(["12",
"room for one person",
"positive"])


