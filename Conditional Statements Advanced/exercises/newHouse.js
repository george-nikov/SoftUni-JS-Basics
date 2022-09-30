function newHouse (input){

    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    if (flowerType === "Roses")
    {
        if (flowerCount > 80)
        {
            price = (flowerCount * 5) * 0.9;
        }
        else
        {
        price = flowerCount * 5;
        }
    }

    else if (flowerType === "Dahlias")
    {
        if (flowerCount > 90)
        {
            price = (flowerCount * 3.80) * 0.85;
        }
        else
        {
        price = flowerCount * 3.80;
        }
    }

    else if (flowerType === "Tulips")
    {
        if (flowerCount > 80)
        {
            price = (flowerCount * 2.80) * 0.85;
        }
        else
        {
        price = flowerCount * 2.80;
        }
    }
    
    else if (flowerType === "Narcissus")
    {
        if (flowerCount < 120)
        {
            price = (flowerCount * 3) * 1.15;
        }
        else
        {
        price = flowerCount * 3;
        }
    }

    else if (flowerType === "Gladiolus")
    {
        if (flowerCount < 80)
        {
            price = (flowerCount * 2.50) * 1.20;
        }
        else
        {
        price = flowerCount * 2.50;
        }

    }

 let leftPrice = budget - price;

if (budget >= price)
{
    console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${leftPrice.toFixed(2)} leva left.`);
}
else
{
    console.log(`Not enough money, you need ${Math.abs(leftPrice).toFixed(2)} leva more.`);
}
}

newHouse(["Tulips","88","260"])

