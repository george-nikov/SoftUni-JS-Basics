function treking (input){

    let n = input[0];

    let p1 = 0; //Musala
    let p2 = 0; //Montblanc
    let p3 = 0; //Kilimandaro
    let p4 = 0;  //K2
    let p5 = 0;  // Everest
    let totalCount = 0;
    let peopleCount = 0;

    for (let index = 1; index <= n; index++) {

        peopleCount = Number(input[index]);

        if (peopleCount <=5 ) {
            p1+= peopleCount;
        }
        else if (peopleCount >=6 && peopleCount <= 12) {
            p2 += peopleCount;
        }
        else if (peopleCount >=13 && peopleCount <= 25) {
            p3+= peopleCount;
        }
        else if (peopleCount >= 26 && peopleCount <= 40) {
            p4+= peopleCount;
        }
        else if (peopleCount >= 41) {
            p5+= peopleCount;
        }
    }

    totalCount = p1 + p2 + p3 +p4 + p5;

let musala = (p1/totalCount) * 100;
let montblanc = (p2/totalCount) * 100;
let kilimandjaro = (p3/totalCount) * 100;
let k2 = (p4/totalCount) * 100;
let everest = (p5/totalCount) * 100;

console.log(`${musala.toFixed(2)}%`);
console.log(`${montblanc.toFixed(2)}%`);
console.log(`${kilimandjaro.toFixed(2)}%`);
console.log(`${k2.toFixed(2)}%`);
console.log(`${everest.toFixed(2)}%`);

}
treking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

