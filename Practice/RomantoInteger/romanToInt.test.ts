import { romanToInt } from './romanToInt'

describe('RomanToInt', () => {
  it('converts numerals to numbers', () => {
    const data = 'III'
    expect(romanToInt(data)).toEqual(3)
  })
  it('converts numerals to numbers', () => {
    const data = 'IV'
    expect(romanToInt(data)).toEqual(4)
  })
  it('converts numerals to numbers', () => {
    const data = 'IX'
    expect(romanToInt(data)).toEqual(9)
  })
  it('converts numerals to numbers', () => {
    const data = 'LVIII'
    expect(romanToInt(data)).toEqual(58)
  })
})
