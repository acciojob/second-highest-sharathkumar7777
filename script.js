function secondHighest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return -Infinity;
  }

  // Remove duplicates
  const unique = Array.from(new Set(arr));

  if (unique.length < 2) {
    return -Infinity;
  }

  // Find highest
  let max = -Infinity;
  for (let i = 0; i < unique.length; i++) {
    if (unique[i] > max) {
      max = unique[i];
    }
  }

  // Find second highest
  let second = -Infinity;
  for (let i = 0; i < unique.length; i++) {
    if (unique[i] !== max && unique[i] > second) {
      second = unique[i];
    }
  }

  return second;
}
