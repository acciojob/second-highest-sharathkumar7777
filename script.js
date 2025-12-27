function secondHighest(arr) {
  // Edge cases
  if (!arr || arr.length < 2) {
    return -Infinity;
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  // If no valid second highest exists
  if (secondMax === -Infinity) {
    return -Infinity;
  }

  return secondMax;
}
