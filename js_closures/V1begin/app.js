var count = 0;

function countBirds() {
  count += 1;
  return count + ' birds';
}

function countDogs() {
  count += 1;
  return count + ' dogs';
}

// closure - a function with access to its own private variables