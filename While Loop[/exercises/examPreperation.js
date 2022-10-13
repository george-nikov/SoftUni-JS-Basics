function examPreperation (input) {

    let poorMarksLimit = Number(input[0]);
    let poorMarksCount = 0; 
    let index = 1;
    let command = input[index]
    let counterPoor = 0;
    let counterExer = 0;
    let sum = 0;
    let average = 0;
    let lastExam = '';
    
    while (poorMarksCount < poorMarksLimit) {  
        command = input[index];
        index++;

        if (command == "Enough"){
            average = (sum / (counterExer + counterPoor)).toFixed(2);
            console.log(`Average score: ${average}`);
            console.log(`Number of problems: ${counterPoor + counterExer}`);
            console.log(`Last problem: ${lastExam}`);
            return;
        }

        lastExam = command;
        command = input[index];
        index++;

        if (command <= 4) {
            counterPoor++;
        }else if (command > 4) {
            counterExer++;
        }

        sum = sum + command;
    }

    console.log(`You need a break, ${poorMarksLimit} poor grades.`);


}
examPreperation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
