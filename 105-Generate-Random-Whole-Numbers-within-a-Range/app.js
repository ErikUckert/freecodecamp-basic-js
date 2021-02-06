function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * ((myMax + 1) - myMin) + myMin);
    // Only change code above this line
  }
  console.log(randomRange(5,10));