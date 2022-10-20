function birthday (input) {

    let rent = Number(input[0]);

    let cake = Number(rent * 0.2);
    let drinks = cake - (cake*0.45);
    let animator = Number(rent/3);

    console.log((cake + drinks + animator + rent).toFixed(1));

}
birthday(['2250'])
