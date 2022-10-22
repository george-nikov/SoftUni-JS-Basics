function filmRating (input){

    let filmsCount = Number(input[0]);
    let name = 0;
    let rating = 0;
    let average = 0;
    let largest = 0;
    let next = 0;
    let min = 10;
    let sum = 0;
    let nameLarge = '';
    let nameMin = '';
    
    
    for (let index = 1; index <= filmsCount * 2; index++) {
        current = input[index];
        name = input[index];
        index ++;
        rating = Number(input[index]);
        sum += rating;
        next = Number(input[index+2]);

        if (largest < rating) {
            largest = rating;
            nameLarge = name;
        }
        if (min > rating) {
            min = rating;
            nameMin = name;
        }
    }
    average = sum / filmsCount;

    console.log(`${nameLarge} is with highest rating: ${largest.toFixed(1)}`);
    console.log(`${nameMin} is with lowest rating: ${min.toFixed(1)}`);
    console.log(`Average rating: ${(average.toFixed(1))}`);
}
filmRating(['5'
    ,'A Star is Born'
    ,'7.8'
    ,'Creed 2'
    ,'7.3'
    ,'Mary Poppins'
    ,'7.2'
    ,'Vice'
    ,'7.2'
    ,'Captain Marvel'
    ,'7.1'
    ])
