function gymnastics (input) {

    let country = input[0];
    let instrument = input[1];

    let difficultPoints = 0;
    let playPoint = 0;

    switch (country) {
        case "Russia":
            switch (instrument) {
                case "ribbon":
                    difficultPoints = 9.100;
                    playPoint = 9.400;
                    break;
                case "hoop":
                    difficultPoints = 9.300;
                    playPoint = 9.800;
                    break;
                case "rope":
                    difficultPoints = 9.600;
                    playPoint = 9.000;
                    break;
            }
            break;
        case "Bulgaria":
            switch (instrument) {
                case "ribbon":
                    difficultPoints = 9.600;
                    playPoint = 9.400;
                    break;
                case "hoop":
                    difficultPoints = 9.550;
                    playPoint = 9.750;
                    break;
                case "rope":
                    difficultPoints = 9.500;
                    playPoint = 9.400;
                    break;
            }
            break;
        case "Italy":
            switch (instrument) {
                case "ribbon":
                    difficultPoints = 9.200;
                    playPoint = 9.500;
                    break;
                case "hoop":
                    difficultPoints = 9.450;
                    playPoint = 9.350;
                    break;
                case "rope":
                    difficultPoints = 9.700;
                    playPoint = 9.150;
                    break;
            }
            break;
    }

let totalPoints = difficultPoints + playPoint;
let left = 20 - totalPoints;
let percent = (left / 20) * 100;

console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${instrument}.`);
console.log(`${percent.toFixed(2)}%`);
}
gymnastics(['Bulgaria','ribbon'])
