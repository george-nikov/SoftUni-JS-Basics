function building(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let s = '';

    for (let i = floors; i > 0; i--) {
        for (let b = 0; b < rooms; b++) {
            if (i === floors) {
                input += (`L${i}${b} `)
            } else if (i % 2 !== 0) {
                input += (`A${i}${b} `)
            } else if (i % 2 === 0) {
                input += (`O${i}${b} `)
            }
        } console.log(input);
        input = '';
    }

}
building(["6", "4"])
