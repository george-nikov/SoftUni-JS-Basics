function final (input) {

    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let price = 0;


    switch (place){
        case "Bulgaria":
            price = dancers * points;
            switch (season) {
                case "summer":
                    price = price - (price*0.05);
                    break;
                case "winter":
                    price = price - (price*0.08);
                    break;
            }
            break;
        case "Abroad":
            price = dancers * points+ (dancers*points)/2;
            switch (season) {
                case "summer":
                    price = price - (price*0.10);
                    break;
                case "winter":
                    price = price - (price*0.15);
                    break;
            }
            break;              
        }

        let charity = price * 0.75;
        let left = price - charity;
        let moneyDancer = left / dancers;
    
        console.log(`Charity - ${charity.toFixed(2)}`);
        console.log(`Money per dancer - ${moneyDancer.toFixed(2)}`)
}
final(['1'
    ,'89.5'
    ,'summer'
    ,'Abroad'
])
