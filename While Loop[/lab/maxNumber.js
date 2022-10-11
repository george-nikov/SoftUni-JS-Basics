function max(input) {
    let inputElement = input[0];
    let i = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (inputElement !== "Stop") {
      let num = Number(inputElement);
      if (num > max) {
        max = num;
      }
      inputElement = input[i];
      i++;
    }
    console.log(max);
  }
max(["100",
"99",
"80",
"70",
"Stop"])
