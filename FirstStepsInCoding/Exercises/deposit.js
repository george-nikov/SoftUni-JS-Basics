function test (input){

    let depositSum = Number(input[0]);
    let depositDate = Number(input[1]);
    let annualProcent = Number(input[2]);
    let totalLihva = Number(depositSum*(annualProcent/100));
    let totalLihvaMonth = Number(totalLihva/12);
    let totalTotal = Number(depositSum+ (depositDate* totalLihvaMonth));


    console.log(totalTotal);
}

test (['200','3','5.7']);
