let num = Math.floor(Math.random() * 100);

let guess = prompt("Enter a natural between 0 to 100:");
let count = 1;
while( guess != num) {
    if( guess > num) {
        guess = prompt("Too high, guess a lower number than this");
    } else if( guess < num) {
        guess = prompt("Too low, enter a higher number");
    }
    count++;
}

console.log(`The initial number was ${num} and you took ${count} attempts to win the game`)
