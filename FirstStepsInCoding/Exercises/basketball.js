function basketball (input){
    let tax = Number (input[0]);
    let shoes = Number (tax - (tax*0.40));
    let clothes = Number (shoes - (shoes*0.20));
    let ball = Number (clothes * (1/4));
    let accessories = Number(ball * (1/5));

    let totalSum = tax + shoes + clothes + ball + accessories;



    console.log (totalSum);
}

basketball (['365'])
