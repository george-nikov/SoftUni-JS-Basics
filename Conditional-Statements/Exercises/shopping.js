function shopping (input) {
    let budget = Number(input [0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);
    
    let videoCardsPrice = videoCardsCount * 250;
    let processorsPrice = processorsCount * (videoCardsPrice * 0.35);
    let ramPrice = ramCount * (videoCardsPrice * 0.10);

    let totalPrice = videoCardsPrice + processorsPrice + ramPrice;  

    if (videoCardsCount > processorsCount){
        totalPrice = totalPrice - totalPrice * 0.15
    }

    let leftMoney = Math.abs(budget - totalPrice);
    let leftMoney2 = Math.abs(totalPrice - budget);

    if (budget >= totalPrice){
        console.log(`You have ${leftMoney.toFixed(2)} leva left!`);
    }
    else{
        console.log(`Not enough money! You need ${leftMoney2.toFixed(2)} leva more!`);
    }

}

shopping(["920.45",
"3",
"1",
"1"])

