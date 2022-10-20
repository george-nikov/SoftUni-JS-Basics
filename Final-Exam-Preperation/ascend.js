function ascend (input) {

let record = Number(input[0]);
let metres = Number(input[1]);
let timeForMetre = Number(input[2]);

let timeTotal = metres * timeForMetre;
let delay = Math.floor(metres/50) * 30;

let total = timeTotal + delay;

let extra = Math.abs(total - record);

if (total >= record) {
console.log(`No! He was ${extra.toFixed(2)} seconds slower.`);
}
else if (total < record) {
console.log(`Yes! The new record is ${total.toFixed(2)} seconds.`);
}
}
ascend(['1377','389','3'])    
