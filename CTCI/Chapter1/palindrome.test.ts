import { isPalindrome } from './palindrome'

describe('Palindrome', () => {
  it('retuns true if the given string is a palindrome', () => {
    expect(isPalindrome('taco cat')).toBeTruthy()
  })
  it('retuns true if the given string is a palindram', () => {
    expect(isPalindrome('dog')).toBeFalsy()
  })
  it('retuns true if the given string is a palindram', () => {
    expect(isPalindrome('atco cta')).toBeTruthy()
  })
})
