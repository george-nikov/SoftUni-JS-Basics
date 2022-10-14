function moving (input) {

    let metresAvailable = input[0] * input[1] * input[2];
    
    let index = 3;
    let current = input[index];
    let totalMetres = Number(0);
    let currentMetres = Number(0);
    let left = Number(0);

    while (totalMetres <= metresAvailable) {
        current = input[index];
        
        if (current == "Done") {
            console.log(`${Math.abs(left)} Cubic meters left.`);
        } 

        currentMetres = Number(input[index]);
        totalMetres += currentMetres;
        left = metresAvailable - totalMetres;
        
        index++;
        current = input[index];
    }
    if (totalMetres >= metresAvailable) {
        console.log(`No more free space! You need ${Math.abs(left)} Cubic meters more.`);
    }
}
moving (["10", 
"1",
"2",
"4", 
"6",
"Done"])
