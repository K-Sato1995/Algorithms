import { iterativeBinarySearch, recursiveBinarySearch } from './binarySearch'

describe('Binary Search', () => {
  it('returns the position of the given value in the given list', () => {
    const sortedList = [2, 3, 4, 5, 6, 7, 8, 9]
    expect(iterativeBinarySearch(sortedList, 6)).toEqual(4)
  })

  it('raises an error when the given value dose not exist in the given list', () => {
    const sortedList = [1, 2, 3]
    expect(() => {
      iterativeBinarySearch(sortedList, 5)
    }).toThrow('No such value')
  })

  it('returns the position of the given value in the given list', () => {
    const sortedList = [2, 3, 4, 5, 6, 7, 8, 9]
    expect(recursiveBinarySearch(sortedList, 6, 0, 7)).toEqual(4)
  })

  it('raises an error when the given value dose not exist in the given list', () => {
    const sortedList = [1, 2, 3]
    expect(() => {
      recursiveBinarySearch(sortedList, 5, 0, 2)
    }).toThrow('No such value')
  })
})
