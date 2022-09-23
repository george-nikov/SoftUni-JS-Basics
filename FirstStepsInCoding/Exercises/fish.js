function fish (input){
    let length = input[0];
    let width = input[1];
    let height = input[2];
    let percent = 0.17;

    let totalVolume = length*width*height;
    let totalVolumeLitres = totalVolume/1000;
    let totalLitresNeeded = totalVolumeLitres*(1-percent);


console.log(totalLitresNeeded);

}

fish (["85","75","47","17"])
