function summerOutfit (input){

    let temperature = Number(input[0]);
    let timeOfDay = input[1];
    let shoes;
    let outfit;

    if (temperature >= 10 && temperature <= 18){

        if (timeOfDay == "Morning")
        {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if (timeOfDay == "Afternoon" || timeOfDay == "Evening")
        {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    if (temperature > 18 && temperature <= 24){

        if (timeOfDay == "Morning")
        {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (timeOfDay == "Afternoon")
        {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        else if (timeOfDay == "Evening")
        {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    if (temperature >= 25){

        if (timeOfDay == "Morning")
        {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        else if (timeOfDay == "Afternoon")
        {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
        else if (timeOfDay == "Evening")
        {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);


}

summerOutfit(["16","Morning"])
