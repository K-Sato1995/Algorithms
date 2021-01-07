// https://medium.com/madhash/selection-sort-in-a-nutshell-how-when-where-932275135c00
export const selectionSort = (list: number[]): number[] | Error => {
  if (list.length === 0) throw 'The given array is empty'

  const listSize = list.length
  let currentMin: number

  for (let i = 0; i < listSize; i++) {
    currentMin = i
    /* 
    Find the index of the smallest value in the rest of the array and set it as the currentMin.
    */
    for (let j = i + 1; j < listSize; j++) {
      if (list[j] < list[currentMin]) {
        currentMin = j
      }
    }

    /*
    Swap the value at i with the smallest value in the rest of the array.
    Skip this part if the value at i is the smallest value in the array.
    */
    if (i != currentMin) {
      const tmp = list[i]
      list[i] = list[currentMin]
      list[currentMin] = tmp
    }
  }

  return list
}

/*
How to swap values in an array in JS/TS
let arr = [1,2,3,4,5]

var tmp = arr[0]
console.log(tmp) //=> 1

arr[0] = arr[2]
console.log(arr) //=> [ 3, 2, 3, 4, 5 ] 

arr[2] = tmp
console.log(arr) //=> [ 3, 2, 1, 4, 5 ] 
*/
