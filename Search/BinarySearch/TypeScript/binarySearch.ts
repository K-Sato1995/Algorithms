const iterativeBinarySearch = (
  sortedList: number[],
  target: number
): number | Error => {
  let low = 0;
  let high = sortedList.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    console.log(`Low: ${low}, Mid: ${mid}, High: ${high}`);

    if (sortedList[mid] === target) {
      // Return the value if the value in the middle is the same as the target value.
      return mid;
    } else if (sortedList[mid] < target) {
      // Set low as (mid + 1) if the value in the middle is smaller that the target value.
      low = mid + 1;
    } else {
      // Set high as mid if the value in the middle is bigger than the target value.
      high = mid;
    }
  }

  throw "No such value";
};

const recursiveBinarySearch = (sortedList: number[], target: number) => {};

export { iterativeBinarySearch, recursiveBinarySearch };

/* 
console.log(iterativeBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
Low: 0, Mid: 4, High: 8
Low: 5, Mid: 6, High: 8
Low: 5, Mid: 5, High: 6
*/
