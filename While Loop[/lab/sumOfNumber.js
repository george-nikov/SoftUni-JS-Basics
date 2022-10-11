function sumOfNumbers (input){

    let index = 1;
    let max = input[0];
    let current = Number(input[index]);
    let plus = 0;
    
    while (plus < max) {
        plus +=parseInt(current);
        index++;
        current = input[index];
    }
    console.log(plus);

}
sumOfNumbers(["100",
"10",
"20",
"30",
"40"])
