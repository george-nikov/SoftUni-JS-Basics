function geometry (input){
    let type = String(input[0]);
    let length = Number(input[1]);
    let length2 = Number(input[2]);
    
    if (type === "square"){
        let squareSum = (length*length)
        console.log(squareSum.toFixed(3));
    }
    else if (type === "rectangle"){
        let rectangleSum = (length*length2).toFixed(3);
        console.log(rectangleSum);
    }
    else if (type === "circle"){
        let circleSum = (length * length * Math.PI).toFixed(3);
        console.log(circleSum);
    }
    else if (type === "triangle"){
        let triangleSum = ((length*length2)/2).toFixed(3);
        console.log(triangleSum);
    }
    

}

geometry(["triangle",
"4.5",
"20"])
