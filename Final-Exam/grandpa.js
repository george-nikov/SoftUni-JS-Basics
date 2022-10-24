function grandpa (input) {

    let days = Number(input[0]);
    let index = 1;
    let totalLitres = 0;
    let totalGradus = 0;

    for (index = 1; index <= days*2; index++) {
        litres = Number(input[index]);
        index++;
        gradus = Number(input[index]);
        totalLitres = totalLitres + litres;
        totalGradus = totalGradus + (litres * gradus);
    }
let average = totalGradus / totalLitres;


console.log(`Liter: ${totalLitres.toFixed(2)}`);
console.log(`Degrees: ${average.toFixed(2)}`);
if (average < 38) {
console.log(`Not good, you should baking!`);
}
else if (average >= 38 && average <= 42) {
console.log(`Super!`);
}else{
    console.log(`Dilution with distilled water!`);
}

}
grandpa(['3'
    ,'100'
    ,'45'
    ,'50'
    ,'55'
    ,'150'
    ,'36'
    ])
