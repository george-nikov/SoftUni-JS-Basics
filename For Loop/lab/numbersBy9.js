function numbersBy9 (input){

let num1 = Number(input[0]);
let num2 = Number(input[1]);

    for (let i = num1; i<= num2;i++ ) {
        if (i % 9 == 0 ) {
            console.log(i);
        }
    }

}
numbersBy9(["100", "200"])
