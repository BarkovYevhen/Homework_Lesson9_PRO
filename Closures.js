function createSum() {
  let previousSum = 0;

  return function (num) {
    const currentSum = previousSum + num;
    previousSum = currentSum;
    return currentSum;
  };
}

const sum = createSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
