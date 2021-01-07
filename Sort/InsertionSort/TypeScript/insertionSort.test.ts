import { insertionSort } from './insertionSort'

describe('InsertionSort', () => {
  it('sorts the array in the right order', () => {
    const data = [8, 4, 3, 1, 2, 6, 5, 7]
    expect(insertionSort(data)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('raises an error when the given array is empty', () => {
    expect(() => {
      insertionSort([])
    }).toThrow('The given array is empty')
  })
})
