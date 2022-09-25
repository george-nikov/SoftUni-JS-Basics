function tradingCommissions (input){
    
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;
    let flagError = false;


    switch (city){
        case "Sofia":
            if ( 0 <= sales && sales <= 500){
                commission = 0.05;
            }
            else if (500 <= sales && sales <= 1000) {
                commission = 0.07;
            }
            else if (1000 <= sales && sales <= 10000){
                commission = 0.08;
            }
            else if (sales > 10000){
                commission = 0.12;
            }
            else{
                flagError = true;
            }
        break;

        case "Varna":
            if ( 0 <= sales && sales <= 500){
                commission = 0.045;
            }
            else if (500 <= sales && sales <= 1000) {
                commission = 0.075;
            }
            else if (1000 <= sales && sales <= 10000){
                commission = 0.1;
            }
            else if (sales > 10000){
                commission = 0.13;
            }
            else{
                flagError =true;
            }

        break;

        case "Plovdiv":
            if ( 0 <= sales && sales <= 500){
                commission = 0.055;
            }
            else if (500 <= sales && sales <= 1000) {
                commission = 0.08;
            }
            else if (1000 <= sales && sales<= 10000){
                commission = 0.12;
            }
            else if (sales > 10000){
                commission = 0.145;
            }
            else {
                flagError = true;
            }

        break;
        default:
            flagError = true;
            break;
    }

if(flagError){
console.log (flagError= "error")
}
else{
console.log((commission * sales).toFixed(2))
}

}

tradingCommissions(["Plovdiv",
"499.99"])

