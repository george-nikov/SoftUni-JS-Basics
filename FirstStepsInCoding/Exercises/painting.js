function painting (input){
    let nylon = Number(input[0]);
    let paint = Number (input[1]);
    let thinner = Number (input[2]);
    let hours = Number(input[3]);

    let nylonSum = Number((nylon + 2)* 1.50);
    let paintSum = Number ((paint* 1.1)* 14.50);
    let thinnerSum = Number((thinner* 5.00));
    let bag = 0.40;

    let totalSumMaterials = (nylonSum + paintSum + thinnerSum + bag);
    let totalSumBuilders = (totalSumMaterials* 0.30)* hours;
    let totalSum = totalSumMaterials+ totalSumBuilders;

    console.log(totalSum);
}

painting (["10","11","4","8"])
