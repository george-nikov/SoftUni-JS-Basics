function bestPlayer (input){

    let index = 0;
    let current = input[index];
    let ime;
    let totalGoals = 0;
    let maxGoal = 0;
    let maxIme;

    while (current !== "END" && index < (input.length*2)) {
        ime = input[index];
        index++;
        totalGoals = Number(input[index]);

        if (maxGoal < totalGoals) {
            maxGoal = totalGoals;
            maxIme = ime;
        }
        index++;
        current = input[index];
    }
    console.log(`${maxIme} is the best player!`);
    if (maxGoal >= 3) {
    console.log(`He has scored ${maxGoal} goals and made a hat-trick !!!`);
    }
    else {
    console.log(`He has scored ${maxGoal} goals.`); 
    }
}
bestPlayer(['Silva'
    ,'5'
    ,'Harry Kane'
    ,'10'
    ])
