function number2 (input){

    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    let plus;
    let minus;
    let multiply;
    let divide;
    let modul;
    let result;
    let odd;


    switch (operator){
        case "+":
            plus = "+";
            result = (N1 + N2);
            if (result % 2 == 0){
                odd = "even";
            }
            else{
                odd = "odd";
            }
        break;

        case "-":
            minus = "-";
            result = (N1 - N2);
            if (result % 2 == 0){
                odd = "even";
            }
            else{
                odd = "odd";
            }
        break;

        case "*":
            multiply = "*";
            result = (N1 * N2);
            if (result % 2 == 0){
                odd = "even";
            }
            else{
                odd = "odd";
            }
        break;

        case "/":
            divide = "/";
            result = (N1 / N2).toFixed(2);
        break;

        case "%":
            modul = "%";
            result = (N1 % N2);
        break;
    }

    if (N2 = 0){
        result = `Cannot divide ${N1} by zero`;
    }
    else{}

let total = `${N1} ${operator} ${N2} = ${result} + ${odd}`
let total1 = `${N1} ${operator} ${N2} = ${result}`
let total2 = result;

if (operator == plus || operator == minus || operator == multiply){
console.log(total);
}
else if (N2 == 0){
    console.log(total2);
}
else{
    console.log(total1);
}


}

number2(["123","12","/"])

