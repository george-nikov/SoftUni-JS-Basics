function hotelRoom (input){

    let month = input[0];
    let nightCount = input[1];

    let studioPrice = 0;
    let apartPrice = 0;

    let totalPriceStudio = 0;
    let totalPriceApart = 0;

    switch (month){
        case "May":
        case "October":
            studioPrice = 50;
            apartPrice = 65;
            if(nightCount > 7 && nightCount <= 14){
                studioPrice = studioPrice * 0.95;
            }
            else if (nightCount > 14){
                studioPrice= studioPrice * 0.70;
                apartPrice= apartPrice * 0.90;
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            apartPrice = 68.70;
            if(nightCount > 14){
                studioPrice = studioPrice * 0.80;
                apartPrice = apartPrice * 0.90;
            }
            break;

        case "July":
        case "August":
            studioPrice = 76;
            apartPrice = 77;
            if (nightCount > 14){
                apartPrice = apartPrice * 0.90;
                studioPrice = studioPrice * 1;
            }
            break;
    }

    
    totalPriceApart = nightCount * apartPrice;
    totalPriceStudio = nightCount * studioPrice;

    console.log(`Apartment: ${totalPriceApart.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);

}

hotelRoom(["August",
"20"])


