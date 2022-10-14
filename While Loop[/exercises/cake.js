function cake (input){

    let partsCount = Number(input[0] * input[1]);
    let index = 2;
    let current = input[index];
    let currentCount = Number(0);
    let left = partsCount;

    while (current !== "STOP") {
        index;
        currentCount = Number(current);
        partsCount -= currentCount;
        left -= currentCount;
        
        if (index == input.length-1) {
    break;
        }
        index++;
        current = input[index];
    }
    
    if (current == "STOP" || current <= partsCount) {
        console.log(`${Math.abs(left)} pieces are left.`);
    }
    else if (partsCount <= 0 ){
        console.log(`No more cake left! You need ${Math.abs(left)} pieces more.`)
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
