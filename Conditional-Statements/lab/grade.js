function grade (input){
    let ocenka = Number(input[0]);
    
    if (ocenka >= 5.50) {
      console.log("Excellent!")
    }   else {
        console.log("error")
    }
}

grade (['5'])
