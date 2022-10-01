function sumOfNumbers (input) {

    let n = String(input[0]);
    let res = 0;

    for (let i = 0; i <= n.length; i++) {

        res += Number(n.charAt(i));

    }

    console.log((`The sum of the digits is:${res}`));
}
sumOfNumbers(["1234"])
