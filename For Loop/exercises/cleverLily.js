function cleverLily (input){

    let age = Number(input[0]);
    let priceForMachine = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let toysCount = 0;
    let money = 0;
    let bdayMoney = 10;
    let priceFromToys=0;
    let left = 0;
    let stolen =0;

    
    for (index = 1; index <= age; index++) {
    
        if (index % 2 === 0) { 
            money +=bdayMoney;
            bdayMoney += 10;
            stolen = stolen + 1;
       }
       else{
        toysCount= toysCount + 1;
       }
    }

    priceFromToys = toysCount * pricePerToy;

    money = money + priceFromToys - stolen;

    left = money - priceForMachine;

    if (money >= priceForMachine)
    {
        console.log(`Yes! ${left.toFixed(2)}`);
    }
    else{
        console.log(`No! ${Math.abs(left).toFixed(2)}`);
    }


}
cleverLily(["10","170.00","6"])
