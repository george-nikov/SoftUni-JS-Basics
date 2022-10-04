function tennis (input){

    let n = Number(input[0]);
    let startingPoints = Number(input[1]);

    let add = 0;
    let result = 0;
    let avg1 = 0;
    let avg2 = 0;
    let avg3 = 0;
    let wonTournaments = 0;

    for (let index = 2; index <= (n+1); index++) {
        result = String(input[index]); 

        switch (result){
            case "W":
            add = 2000;
            startingPoints += add;
            avg1 += add;
            wonTournaments++;
                break;

            case "F":
            add = 1200;
            startingPoints += add;
            avg2 += add;
                break;

            case "SF":
            add = 720;
            startingPoints += add;
            avg3 += add;
                break;

        }
    }
    let average = (avg1 + avg2 + avg3)/ n;
    

console.log(`Final points: ${startingPoints}`);//Final Points
console.log(`Average points: ${Math.floor(average)}`);
console.log(`${(wonTournaments/n* 100).toFixed(2)}%`)


}
tennis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"
])
