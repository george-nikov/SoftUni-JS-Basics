function worldRecord (input){

    let worldRecord = Number(input[0]);
    let metres = Number(input[1]);
    let timePerMetre = Number(input[2]);
    
    let totalTime = metres * timePerMetre
    let delayTime = Math.floor(metres/15) * 12.5;
    let totalTimeSeconds = totalTime + delayTime;
    let leftTime = totalTimeSeconds - worldRecord;

  

    if (worldRecord >= totalTimeSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalTimeSeconds.toFixed(2)} seconds.`);
        
    }
    else {
        console.log(`No, he failed! He was ${leftTime.toFixed(2)} seconds slower.`)
    }
   
}

worldRecord(["10464",
"1500",
"20"])


