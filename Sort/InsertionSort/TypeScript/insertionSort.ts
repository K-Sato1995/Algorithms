// https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-4.php
const insertionSort = (list: number[]) => {
  let length = list.length;
  if (length === 0) throw "The given array is empty";

  for (let i = 0; i < length; i++) {
    // Set the first element in the unsorted array as key.
    let key = list[i];

    // The index of the last element of the sorted array
    let j = i - 1;

    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      j--;
    }

    list[j + 1] = key;
  }

  return list;
};

export { insertionSort };
