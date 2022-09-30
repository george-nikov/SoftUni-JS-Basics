function cinema (input){

    let type = input[0];
    let rowsCount = Number(input[1]);
    let columnsCount = Number(input[2]);
    
    let price = 0
    switch (type){

        case "Premiere":
        price = (rowsCount * columnsCount) * 12;
        break;

        case "Normal":
        price = (rowsCount * columnsCount) * 7.50;
        break;

        case "Discount":
        price = (rowsCount * columnsCount) * 5;
        break;
    }

    console.log(price.toFixed(2) + " leva");
        
    }


cinema(["Premiere","10","12"])
