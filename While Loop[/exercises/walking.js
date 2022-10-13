function walking (input){

    let totalSteps = Number(0);
    let index = 0;
    let current = input[index];
    let addSteps = 0;
    let going = 0;
    let total = going + totalSteps;
    

    while (current !== "Going home") {
        totalSteps += Number(current);

        if (totalSteps >= 10000){
            break;
        }
        index++;
        current = input[index];
    }

    if (current == "Going home") {
        index++;
        current = Number(input[index]);
        going = current;
    }

    total = going + totalSteps;
    addSteps = Math.abs(total - 10000);
    
    if (total >= 10000) {
    console.log(`Goal reached! Good job!`);
    console.log(`${addSteps} steps over the goal!`);
    }
    else{
    console.log(`${addSteps} more steps to reach goal.`);
    }
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
