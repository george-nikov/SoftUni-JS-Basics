function books (input){
    let totalLists = Number(input[0]);
    let listPerHour = Number(input[1]);
    let days = Number(input[2]);
    let totalhours = (totalLists/listPerHour);
    
    console.log(totalhours/days);
}
books (['212','20','2'])
