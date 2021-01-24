/* Getting number from user */
let realNumber = parseInt(prompt("What is the outer limit of your range? (ie: from 1 to x)"));
console.log(realNumber);


/* Checking to see that it is a real number: after project works, make it so that the number has to be greater than 5 with ' || (realNumber <=5)' */
while (!realNumber) {
    realNumber = parseInt(prompt("That isn't a number! Try again!"));
}
let range = Math.floor(realNumber * Math.random()) + 1;


/* Getting guesses form user, testing to see if it is an number*/
let guess = parseInt(prompt(`Guess a number between 1 and ${realNumber}.`));
let numGuesses = 1;
while (!guess) {
    guess = parseInt(prompt(`This has to be a NUMBER!`));

}

/* evaluating guess, ask user the cap on number of guesses and put caviate ' || numGuesses === Limit'*/
while (guess !== range) {
    /* put the 'if (guess === q) break; in, might have to do a while loop */
    if (guess < range) {
        guess = prompt("You are too low. Next guess:");
        numGuesses++;
        while (!guess) {
            guess = parseInt(prompt(`This has to be a NUMBER!`));
        }
    } else if (guess > range) {
        guess = prompt("You are too high. Next guess:");
        numGuesses++;
        while (!guess) {
            guess = parseInt(prompt(`This has to be a NUMBER!`));
        }
    } 
} 

alert(`You did it! The number was ${range} and it took you ${numGuesses} trie(s) to get it!`)


console.log(range);