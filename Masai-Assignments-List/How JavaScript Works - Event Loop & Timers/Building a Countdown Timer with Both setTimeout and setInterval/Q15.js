const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter countdown time in seconds: ", (input) => {
  let timeLeft = parseInt(input);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  let intervalId = setInterval(() => {
    console.log(`Time left: ${timeLeft} seconds`);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);


  setTimeout(() => {
    process.stdin.on('data', (key) => {
      if (key.toString().trim().toLowerCase() === 's') {
        clearInterval(intervalId);
        console.log("Countdown Stopped by User.");
        rl.close();
      }
    });
  }, 100); 
});
