function wordRead (input){

    let index = 0;
    let element = input[index];

    while (element !== "Stop") {
        console.log(element);
        index++;
        element = input[index]
    }

}
wordRead(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])

