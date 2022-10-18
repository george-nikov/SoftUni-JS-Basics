function journey(input) {

    let neededMoney = Number(0);
    let destination;

    for (let index = 0; index <= input.length; index++) {

        destination = input[index];
        index++;
        neededMoney = Number(input[index]);

        for (let j = 0; j <= input.length; j++) {
            index++;
            let plus = Number(input[index]);
            neededMoney -= plus;
            if (neededMoney <= 0) {
                console.log(`Going to ${destination}!`);
                break;
            }
            if (plus=="End") {
                break;
            }
        }
    }

}
journey(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
