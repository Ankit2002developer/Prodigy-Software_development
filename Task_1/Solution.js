let x = parseInt(prompt("Enter the value:"));
let t = prompt("Is it celsius(c) or fahrenheit(f) or kelvin(k?");

while ( t != "c" && t != "f" && t != "k") {
    t = prompt("Please enter a valid temperature scale\n(c or f or k)");
}
    if( t == "c") {
        const f = (9/5) * x + 32;
        const k = x + 273.16;
        console.log(`The temperature is\n ${f} fahrenheit \n ${k} kelvin`);
    } else if( t == "f") {
        const c = (5/9) * ( x - 32);
        const k = c + 273.16;
        console.log(`The temperature is\n ${c} celsius \n ${k} kelvin`);
    } else if( t == "k") {
        const c = x - 273.16;
        const f = (9/5) * c + 32;
        console.log(`The temperature is\n ${c} celsius \n ${f} fahrenheit`);
    }


