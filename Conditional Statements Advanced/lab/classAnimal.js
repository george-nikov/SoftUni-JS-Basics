function classAnimal (input){

    let name = input[0];

    if (name == "dog"){
        console.log("mammal");
    }
    else if (name == "crocodile" || name == "tortoise" || name == "snake"){
        console.log("reptile")
    }
    else {
        console.log("unknown");
    }


}

classAnimal(["snake"])
