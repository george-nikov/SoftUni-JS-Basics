function zaplata (input){

    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);
    let type;
    
    for (index = 2; index <= tabsCount ; index++ ) {
        type = input[index];
    
        switch (type){
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
        break;
        }
    }
    if(salary > 0){
        console.log(salary);
    }

}
zaplata(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])

