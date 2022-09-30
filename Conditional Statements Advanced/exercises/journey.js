function journey (input){

    let budget = Number(input[0]);
    let season = input[1];

    let place; // Camp or Hotel
    let country; // Bulgaria, Balkans, Europe

    let price = 0;

    switch (season)
    {
        case "summer":
        place = "Camp"; 
            if (budget <= 100)
            {
                country = "Bulgaria";
            }
            else if (budget <= 1000)
            {
                country = "Balkans";
            }
            else if (budget > 1000)
            {
                country = "Europe";
            }
            if (country === "Europe")
            {
                place = "Hotel";
            }
        
        break;

        case "winter":
        place = "Hotel"
            if (budget <= 100)
            {
                country = "Bulgaria";
            }
            else if (budget <= 1000)
            {
                country = "Balkans";
            }
            else if (budget > 1000)
            {
                country = "Europe";
            }
            if (country === "Europe")
            {
                place = "Hotel";
            }
        break;
    }

if (country === "Bulgaria")
{
    if (season === "summer")
    {
        price = budget * 0.30;
    }
    else if (season === "winter")
    {
        price = budget * 0.70;
    }
}
if (country === "Balkans")
{
    if (season === "summer")
    {
        price = budget * 0.40;
    }
    else if (season === "winter")
    {
        price = budget * 0.80;
    }
}
if (country === "Europe")
{
        price = budget * 0.90;
}


console.log(`Somewhere in ${country}`);
console.log(`${place} - ${price.toFixed(2)}`);


}

journey(["1500", "summer"])
