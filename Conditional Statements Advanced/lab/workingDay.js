function weWork (input){

    let text = input[0];

    switch (text){
        case "Monday":
            console.log("Working day");
            break;
        case "Tuesday":
            console.log("Working day");
            break;
        case "Wednesday":
            console.log("Working day");
            break;
        case "Thursday":
            console.log("Working day");
            break;
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
            console.log("Weekend");
            break;
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }

}

weWork (["Monday"])
