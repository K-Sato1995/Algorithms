// https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-4.php
const insertionSort = (list: number[]) => {
  const length = list.length
  if (length === 0) throw 'The given array is empty'

  for (let i = 0; i < length; i++) {
    // Set the first element in the unsorted array as key.
    const key = list[i]

    // The index of the last element of the sorted array
    let j = i - 1

    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j]
      j--
    }

    list[j + 1] = key
  }

  return list
}

// [2, 3, 5, 5, 6, 8, 9]
export function newInsertionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    // 0の場合はsortedとする為
    if (i === 0) continue

    // iが前の値より小さい場合はswapを繰り返す
    while (array[i] < array[i - 1]) {
      swap(i, i - 1, array)
      i--
    }
  }
  return array
}

const swap = (i: number, j: number, arr: number[]) => {
  const tmp = arr[j]
  arr[j] = arr[i]
  arr[i] = tmp
}

export { insertionSort }
