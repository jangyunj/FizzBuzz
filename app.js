function FizzBuzz(x) {
  if (x % 15 == 0) {
    console.log("FizzBuzz");
  } else if (x % 3 == 0) {
    console.log("Fizz");
  } else if (x % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log("Not divisible by either 3 or 5");
  }
}

FizzBuzz(45);
