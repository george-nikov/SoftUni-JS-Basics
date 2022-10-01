function powerof2(n) {
    let num = 1;
    for (let i = n/2; i <=n; i++) {
        console.log(num);
        num = num * 2 * 2;
    }
}
powerof2(10)
