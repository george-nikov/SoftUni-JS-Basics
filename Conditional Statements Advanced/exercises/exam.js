function exam (input){

    let startHours = Number(input[0]);
    let startMinutes = Number(input[1]);

    let startTotal = Number(((startHours * 60) + startMinutes));

    let arrivalHours = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let arrivalTotal = Number(((arrivalHours * 60) + arrivalMinutes));
    
    let difference = Math.abs(arrivalTotal - startTotal);
    let hourDifference = Math.floor(difference/60);
    let minutesDifference = difference % 60;

    if (minutesDifference === 0 || (minutesDifference < 10 && hourDifference > 0)) {
        minutesDifference = `0${minutesDifference}`;

    let time = "";
   
   
    if (arrivalTotal = startTotal)
    {
        time = "On time"
    }
    else if (arrivalTotal > startTotal) {

        time = "Late"
        console.log(`${minutesDifference} minutes after the start`);
    }
    else if (arrivalTotal > startTotal && difference >= 60){
        time = "Late"
        console.log(`${hourDifference}:${minutesDifference} hours after the start`);
    }
    else if (difference <= 30) {
        time = "On time";
        console.log(`${minutesDifference} minutes before the start`);
      } else if (difference > 30 && difference < 60) {
        time = "Early";
        console.log(`${minutesDifference} minutes before the start`);
      } else {
        time = "Early";
        console.log(
          `${hourDifference}:${minutesDifference} hours before the start`);
      }
    }
console.log(time);

}
exam(["9","30","9","00"])
