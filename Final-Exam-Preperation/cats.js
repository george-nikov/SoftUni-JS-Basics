function cats (input) {

    let minutesWalk = Number(input[0]);
    let countPerDay = Number(input[1]);
    let caloriesEaten = Number(input[2]);

    let totalCaloriesBurned = (minutesWalk * countPerDay) * 5;
    let difference = caloriesEaten/2;

    if (totalCaloriesBurned >= difference) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurned}.`);

    }
    else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurned}.`);

    }

}
cats(['30','3','600'])
