function toys (input){

    let trip = Number(input[0]);
    let puzzelCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlePrice = puzzelCount * 2.60;
    let dollPrice = dollCount * 3;
    let bearsPrice = bearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let totalPrice = puzzlePrice + dollPrice + bearsPrice + minionsPrice + trucksPrice;
    let totalCount = Number(puzzelCount + dollCount + bearsCount + minionsCount + trucksCount);

    
    if (totalCount >=50 ){
    totalPrice = totalPrice - totalPrice * 0.25
    }

    let rentPrice = totalPrice * 0.10;

    let total = totalPrice - rentPrice;

    let leftPrice = total - trip;

    if (total >= trip){
        console.log(`Yes! ${leftPrice.toFixed(2)} lv left.`)
    }
    else {
        console.log(`Not enough money! ${Math.abs(leftPrice).toFixed(2)} lv needed.`)
    }





}

toys(["43.8","20","25","30","50","10"])
