function godzilla (input){

    let budget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let outfitPrice = Number(input[2]);

    let decorPrice = budget * 0.10;
    let statistsPrice = statistsCount * outfitPrice; 
    let totalPrice = decorPrice + statistsPrice;


    if (statistsCount > 150){
     statistsPrice *=0.9;
    }
    

    if (totalPrice > budget){
        let leftPrice = totalPrice - budget
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${Math.abs(leftPrice).toFixed(2)} leva more. `);
    }

    else {
        let moneyLeft = budget - totalPrice
        console.log("Action!");
        console.log(`Wingard starts filming with ${Math.abs(moneyLeft).toFixed(2)} leva left.`);
    }

}


godzilla(["15437.62","186","57.99"])

