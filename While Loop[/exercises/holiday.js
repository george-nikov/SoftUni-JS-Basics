function holiday (input){

let moneyNeeded = Number(input[0]);
let moneyAvailable = Number(input[1]);
let index = 2;
let digits;
let counterSpend = 0;
let counterDays = 0;

let current = input[index];

while (moneyAvailable < moneyNeeded) {

if (current == "spend") {
index++;
digits = Number(input[index]);
moneyAvailable -= digits;
counterSpend++;
counterDays++;

    if (moneyAvailable <= 0) {
    moneyAvailable = 0;
    }
    if (counterSpend >= 5) {
        console.log(`You can't save the money. `);
        console.log(`${counterDays}`);
        break;
        }
}
else if (current == "save"){
index++;
digits = Number(input[index]);
moneyAvailable += digits;
counterDays++;
counterSpend = 0;
}
index++;
current = input[index];  
}

if (moneyAvailable >= moneyNeeded) {
    console.log(`You saved the money for ${counterDays} days.`);
}

}
holiday(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
