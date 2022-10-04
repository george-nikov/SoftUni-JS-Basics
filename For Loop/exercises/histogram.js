function histogram (input){

    let currentDigit = 0;   
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let n = Number(input[0]);
   let percent1 = 0;
   let percent2 = 0;
   let percent3 = 0;
   let percent4 = 0;
   let percent5 = 0;

    for (let index = 1; index <= n; index++) {
        currentDigit = input[index];
        
        if (currentDigit < 200) {
            p1++;
        }
        else if (currentDigit <= 399) {
            p2++;
        }
        else if (currentDigit <= 599) {
            p3++;
        }
        else if (currentDigit <= 799) {
            p4++;
        }
        else if (currentDigit >= 800) {
            p5++;   
        }

        percent1 = ((p1 / n)*100).toFixed(2);    
        percent2 = ((p2 / n)*100).toFixed(2);
        percent3 = ((p3 / n)*100).toFixed(2);
        percent4 = ((p4 / n)*100).toFixed(2);
        percent5 = ((p5 / n)*100).toFixed(2);
        
    }

    console.log(`${percent1}%`);
    console.log(`${percent2}%`);
    console.log(`${percent3}%`);
    console.log(`${percent4}%`);
    console.log(`${percent5}%`);
   

}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])
