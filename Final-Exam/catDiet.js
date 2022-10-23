function catDiet (input){

    let percentFat = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentCarbs = Number(input[2]);
    let totalCalories = Number(input[3]);
    let percentWater = Number(input[4]);

    let fats = ((percentFat/100)*totalCalories)/9;
    let protein = ((percentProtein/100)*totalCalories)/4;
    let carbs = ((percentCarbs/100)*totalCalories)/4;
   
    let totalWeight = fats + protein + carbs;
    let caloriesPerGram = totalCalories / totalWeight;
    let percent = 100 - percentWater;
    let gram = (percent/100)*caloriesPerGram;
    console.log(gram.toFixed(4));

}
catDiet(['40'
,'40'
,'20'
,'3000'
,'40'
    ])
