function lunch (input){

    let serialName = String(input[0]);
    let serialTime = Number(input[1]);
    let totalTime = Number(input[2]);

    let lunchTime = totalTime / 8;
    let breakTime = totalTime / 4;

    let freeTime = totalTime - lunchTime - breakTime;

    let leftTime = Math.abs(freeTime - serialTime);
    
    if (freeTime >= serialTime){
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(leftTime)} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(leftTime)} more minutes.`);
    }

}

lunch (["Teen Wolf",
"48",
"60"])
