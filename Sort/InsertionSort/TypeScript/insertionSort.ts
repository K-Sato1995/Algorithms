const insertionSort = (list: number[]) => {
  let length = list.length;
  if (length === 0) throw "The given array is empty";

  for (let i = 0; i < length; i++) {
    let key = list[i];
    let j = i - 1;

    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      j = j - 1;
    }
    list[j + 1] = key;
  }

  return list;
};

export { insertionSort };
