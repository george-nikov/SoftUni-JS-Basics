function table (input){

let a = input[0];
    for (let index = 1; index <= 10; index++) {
        let test = index * a;
        let demo = `${index} * ${a} = ${test}`;
        console.log(demo);
    }

}
table(["1"])
