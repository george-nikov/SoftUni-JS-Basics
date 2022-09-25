function mister (input){
    
    let age = Number(input [0]);
    let title = input[1];

    if (age >= 16 && title == "m"){
        console.log("Mr.");
    }
    if (age < 16 && title == "m"){
        console.log("Master");
    }
    if (age >= 16 && title == "f"){
        console.log("Ms.");
    }
    if (age < 16 && title == "f"){
        console.log("Miss");
    }


}

mister (["17",
"m"])

