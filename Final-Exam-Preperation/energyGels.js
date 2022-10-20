function energyGels (input) {

    let flavour = input[0];
    let size = input[1];
    let count = input[2];
    let pricePer = Number(0);
    let countPer = 0;
    let discount = 0;

    switch (flavour) {
        case "Watermelon":
            if (size == "small") {
                pricePer = 56;
                countPer = 2;
            }
            else if (size == "big") {
                pricePer = 28.7;
                countPer = 5;
            }
            break;
        case "Mango":
            if (size == "small") {
                pricePer = 36.66;
                countPer = 2;
            }
            else if (size == "big") {
                pricePer = 19.60;
                countPer = 5;
            }
            break;
        case "Pineapple":
            if (size == "small") {
                pricePer = 42.10;
                countPer = 2;
            }
            else if (size == "big") {
                pricePer = 24.80;
                countPer = 5;
            }
            break;
        case "Raspberry":
            if (size == "small") {
                pricePer = 20;
                countPer = 2;
            }
            else if (size == "big") {
                pricePer = 15.20;
                countPer = 5;
            }
            break;
    }
    let totalPrice = (pricePer * countPer) * count;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        discount = totalPrice * 0.15;
    }
    else if (totalPrice > 1000){
        discount = totalPrice * 0.50;
    }
let final = totalPrice - discount;

console.log(`${final.toFixed(2)} lv.`); 

}
energyGels(['Watermelon','big','4'])
