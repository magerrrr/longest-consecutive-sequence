module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0)
    return 0;
  array = array.sort((a, b) => {
    return a - b
  });

  let numb = 1;
  let max = 1;
  let i = 0;
  while (i < array.length - 1) {
    numb = 1;
    let checker = 1;
    while (checker === 1) {
      checker = 0;
      while (array[i + 1] - array[i] === 1) {
        numb++;
        i++;
      }
      while (array[i + 1] === array[i]) {
        checker = 1;
        i++;
      }
    }

    if (numb > max)
      max = numb;
    i++;
  }
  return max;
}