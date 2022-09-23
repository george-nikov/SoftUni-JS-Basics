function green (input){
    let area = Number(input);
    let sum = Number(area*7.61);
    let discount= Number(sum*0.18);
    let finalPrice= Number(sum-discount);
    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);

}
green(545.55);
