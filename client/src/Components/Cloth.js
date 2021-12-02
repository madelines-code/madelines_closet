function countdown(n){
  if (n<1) {
    return [];
  } else {
    const countArray = countdown(n-1);
    countArray.push(n);
    return countArray;
  }
}

console.log(countdown(10));