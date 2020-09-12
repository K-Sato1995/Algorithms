// https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c
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