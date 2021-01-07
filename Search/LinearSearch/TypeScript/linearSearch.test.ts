import { linearSearch, newLnearSearch } from './linearSearch'

describe('linerSearch', () => {
  it('returns true if the given value exists in the given list', () => {
    const data = [2, 3, 4, 5, 6, 7, 8, 9]
    expect(linearSearch(data, 6)).toBeTruthy()
  })

  it('returns false if the given value dose not exist in the given list', () => {
    const data = [2, 3, 4, 5, 6, 7, 8, 9]
    expect(linearSearch(data, 10)).toBeFalsy()
  })

  it('returns the position of the given value in the given list', () => {
    const data = [2, 3, 4, 5, 6, 7, 8, 9]
    expect(newLnearSearch(data, 6)).toEqual(4)
  })

  it('raises an error when the given value dose not exist in the given list', () => {
    const data = [2, 2, 2]
    expect(() => {
      newLnearSearch(data, 1)
    }).toThrow('No such value')
  })
})
