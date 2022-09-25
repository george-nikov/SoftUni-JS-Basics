function classAnimal2 (input){

    let animal = input[0];

    switch (animal){
        case "dog":
            console.log("mammal");
            break;
        case "snake":
            console.log("reptile");
            break;
        case "tortoise":
            console.log("reptile");
            break;
        default:
            console.log("Error");
            break;
    }
}
classAnimal2(["dog"])
