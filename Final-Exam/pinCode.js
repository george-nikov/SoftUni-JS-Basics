function pinCode(input) {

    let lim1 = input[0];
    let lim2 = input[1];
    let lim3 = input[2];
    let flagPrime = true;

    for (let i = 1; i <= lim1; i++) {
        if (i % 2 == 0) {
            for (let j = 2; j<=lim2; j++){
                flagPrime = true;
                for (let l = 2; l<=lim2; l++) {
                    
                    if (j !== l) {
                        
                        if (j % l == 0) {
                           flagPrime = false; 
                        } 
                    }    
                }
                for (let k = 1; k<=lim3; k++) {
                    if (k % 2 == 0) {
                        if (flagPrime){
                            console.log(`${i} ${j} ${k}`);
                        }   
                    }
                }
                
            }
 
        }
    }

}
pinCode(['3', '5', '5'])
