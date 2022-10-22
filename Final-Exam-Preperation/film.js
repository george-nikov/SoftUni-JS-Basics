function film (input) {

    let film = input[0];
    let days = Number(input[1]);
    let ticketCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentForCinema = Number(input[4]);

    let ticketSum = ticketCount * ticketPrice;
    let allTimeSum = days * ticketSum;
    let percent = allTimeSum * (percentForCinema/100);
    let total = allTimeSum - percent;

    console.log(`The profit from the movie ${film} is ${total.toFixed(2)} lv.`);

}
film(['The Programmer','20','500','7.50','7'])
