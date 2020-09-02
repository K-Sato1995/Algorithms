// https://medium.com/madhash/selection-sort-in-a-nutshell-how-when-where-932275135c00
export const selectionSort = (list: number[]): number[] | Error => {
  if (list.length === 0) throw "The given array is empty";

  let currentMin: number;

  for (let i = 0; i < list.length; i++) {
    currentMin = i;
    // console.log(`-----------currentMin: ${currentMin}--------------------`);

    //check the rest of the array to see if anything is smaller
    for (let j = 0; j < list.length; j++) {
      // console.log(`list: ${list}`);
      if (list[currentMin] < list[j]) {
        currentMin = j;
      }
      // console.log(`currentMin: ${currentMin}`);

      if (i !== currentMin) {
        var tmp = list[i];
        list[i] = list[currentMin];
        list[currentMin] = tmp;
      }
    }
  }

  return list;
};

selectionSort([3, 2, 1]);

/*
selectionSort([3, 2, 1]);
-----------currentMin: 0--------------------
list: 3,2,1
currentMin: 0
list: 3,2,1
currentMin: 0
list: 3,2,1
currentMin: 0
-----------currentMin: 1--------------------
list: 3,2,1
currentMin: 0
list: 2,3,1
currentMin: 1
list: 2,3,1
currentMin: 1
-----------currentMin: 2--------------------
list: 2,3,1
currentMin: 0
list: 1,3,2
currentMin: 1
list: 1,2,3
currentMin: 2
*/

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
