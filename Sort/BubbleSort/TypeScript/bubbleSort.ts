const bubbleSort = (list: number[]): number[] => {
  let swapped = true
  const length = list.length

  if (list.length === 0) return list

  while (swapped) {
    swapped = false

    for (let i = 0; i < length - 1; i++) {
      if (list[i] > list[i + 1]) {
        const tmp = list[i]
        list[i] = list[i + 1]
        list[i + 1] = tmp
        swapped = true
      }
    }
  }

  return list
}

export { bubbleSort }
