function familyTrip (input) {

let budget = Number(input[0]);
let nights = Number(input[1]);
let pricePerNight = Number(input[2]);
let percentExtra = Number(input[3]);

if (nights > 7) {
pricePerNight = pricePerNight - pricePerNight * 0.05;
}

let price = nights * pricePerNight;
let extra = budget * (percentExtra/100);

let total = price + extra;

let left = Math.abs(budget - total);

if (total <= budget) {
console.log(`Ivanovi will be left with ${left.toFixed(2)} leva after vacation.`);
}
else {
console.log(`${left.toFixed(2)} leva needed.`);
}
}
familyTrip(['800.50','8','100','2'])
