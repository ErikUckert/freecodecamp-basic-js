function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const rangeArr = rangeOfNumbers(startNum, (endNum - 1));
    rangeArr.push(endNum);
    return rangeArr;
  };
};

console.log(rangeOfNumbers(6, 9))