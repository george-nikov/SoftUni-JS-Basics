function password (input){
    let word = String(input[0]);

    if (word === String("s3cr3t!P@ssw0rd")){
        console.log("Welcome")
        
    }   else {
        console.log("Wrong password!")
    }
}
password(["s3cr3t!P@ssw0rd""])
