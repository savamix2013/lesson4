const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let n = 5; n * n <= num; n += 6) {
    if (num % n === 0 || num % (n + 2) === 0) return false;
  }

  return true;
}

function generatePrimesUpToLength(startingNumber, length) {
  const prime = [];
  let currentNumber = startingNumber;

  while (prime.length < length) {
    if (isPrime(currentNumber)) {
      prime.push(currentNumber);
    }
    currentNumber++;
  }

  return prime;
}

rl.question("Введіть початкове число: ", (startingNumber) => {
  rl.question("Введіть бажану довжину масиву: ", (desiredLength) => {
    const parsedStartingNumber = parseInt(startingNumber);
    const parsedDesiredLength = parseInt(desiredLength);

    if (!isNaN(parsedStartingNumber) && parsedStartingNumber > 1 && !isNaN(parsedDesiredLength) && parsedDesiredLength > 0) {
      const primeNumbersArray = generatePrimesUpToLength(parsedStartingNumber, parsedDesiredLength);
      console.log(primeNumbersArray);
    } else {
      console.log("Будь ласка, введіть коректні значення.");
    }

    rl.close();
  });
});
