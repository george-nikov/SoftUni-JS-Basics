function petsFood (input) {

    let days = Number(input[0]);
    let foodGrams = Number(input[1]);

    let dogFood = Number(0);
    let catFood = Number(0);
    let counter = 0;
    let biscuit = 0;
    let totalEaten = 0;
    let totalDog = 0;
    let totalCat = 0;

    for (let index = 2; index <= (days*2)+1; index++) {
        dogFood = Number(input[index]);
        counter++;
        index++;
        catFood = Number(input[index]);

        if (counter % 3 == 0){
            biscuit = (dogFood+catFood) * 0.10;
        }
        totalEaten += dogFood + catFood;
        totalDog += dogFood;
        totalCat += catFood;
    }

    let percentTotal = (totalEaten/foodGrams)* 100;
    let percentDog = (totalDog/totalEaten)* 100;
    let percentCat = (totalCat/totalEaten)* 100;
    
console.log(`Total eaten biscuits: ${Math.ceil(biscuit)}gr.`);
console.log(`${percentTotal.toFixed(2)}% of the food has been eaten.`);
console.log(`${percentDog.toFixed(2)}% eaten from the dog.`);
console.log(`${percentCat.toFixed(2)}% eaten from the cat.`);
}
petsFood(['3','1000','300','20','100','30','110','40'])
