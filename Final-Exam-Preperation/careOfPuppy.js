function careOfPuppy (input){

    let foodGrams = input[0] * 1000;
    let index = 1;
    let grams = 0;
    let current = input[index];
    let foodEaten = 0;

    while (current !== "Adopted") {
        grams = Number(current)
        foodEaten += grams;
        index++;
        current = input[index];
    }
    let left = foodGrams - foodEaten;
    if (left >= 0) {
        console.log(`Food is enough! Leftovers: ${left} grams.`);
    }
    else {
        console.log(`Food is not enough. You need ${Math.abs(left)} grams more.`);
    }
}
careOfPuppy(['4','130','345','400','180','230','120','Adopted'])
