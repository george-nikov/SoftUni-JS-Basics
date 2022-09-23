function school (input){
    let pens = input[0]*5.80;
    let markers = input[1]*7.20;
    let litres = input[2]*1.20;
    let totalSum = pens+ markers+ litres;
    let totalSumDiscount= totalSum-(totalSum* 0.25);

    console.log(totalSumDiscount);
}

school (['2','3','4','25'])
