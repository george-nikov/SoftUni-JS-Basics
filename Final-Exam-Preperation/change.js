function change (input) {

let bitcoins = Number(input[0]);
let yuans = Number(input[1]);
let commission = Number(input[2]);

let bitcoinsPrice = bitcoins * 1168;
let yuansToDollars = yuans * 0.15;
let yuansToLeva = yuansToDollars * 1.76;

let totalEuro = (bitcoinsPrice + yuansToLeva)/1.95;
let commissionTotal = (commission * 0.01) * totalEuro
let final = (totalEuro - commissionTotal);
console.log(final.toFixed(2));

}
change(["1","5","5"])
