function password (input){

    let username = input[0];
    let pass = input[1];

    let current = input[2];
    let index = 3;
    while (current !== pass){
        current = input[index];
        index++;
    }
console.log(`Welcome ${username}!`);
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
