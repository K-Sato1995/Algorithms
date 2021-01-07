// https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060
const mergeSort = (list: number[]) => {
  const listLength = list.length

  if (listLength <= 0) return 'The given array is empty!'

  // you need to figure out the middle index to divide the array in half
  const middleIndex = Math.floor(listLength / 2)

  // This is where we will be dividing the array into left and right
  const left = list.slice(0, middleIndex)
  const right = list.slice(middleIndex)

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (list1: number[], list2: number[]) => {
  const sortedList = []

  while (list1.length && list2.length) {
    if (list1[0] < list2[0]) {
      sortedList.push(list1.shift())
    } else {
      sortedList.push(list2.shift())
    }
  }

  return sortedList.concat(list1.slice().concat(list2.slice()))
}

export { mergeSort }
