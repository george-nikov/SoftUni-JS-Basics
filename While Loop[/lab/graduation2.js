function graduation2 (input){

    let name = input[0];
    let index = 1;
    let num = Number(input[index]);
    let grade = 1;
    let counter = 0;
    let sum = 0;

    while (grade <= 12) {
        if (num < 4) {
            counter++;
            if (counter == 2) {
                console.log(`${name}} has been excluded at ${grade} grade`);
            break;
            }
        }
        else {
            sum += num;
            grade++;
            num = Number(input[index]);
        }
        index++;
    }
    let average = (sum/12).toFixed(2)

    if (grade >= 12) {
        console.log(average);
    }

}
graduation2(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
