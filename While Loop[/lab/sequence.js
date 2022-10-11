function sequence (input) {

    let n = input[0];
    let index = 1;
    while (index <= n) {
        console.log(index);
        index = (index*2) + 1;
    }

}
sequence(["8"])
