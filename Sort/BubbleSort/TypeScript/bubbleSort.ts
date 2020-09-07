const bubbleSort = (list: number[]) => {
  let swapped = true;
  const length = list.length;

  if (list.length === 0) throw "The given array is empty";

  while (swapped) {
    swapped = false;

    for (let i = 0; i < length - 1; i++) {
      if (list[i] > list[i + 1]) {
        let tmp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = tmp;
        swapped = true;
      }
    }
  }

  return list;
};

export { bubbleSort };