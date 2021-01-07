import { isPalindrome } from './palindromeNum'

describe('PalindromeNumber', () => {
  it('checks if the given number is palindrome', () => {
    const data = 121
    expect(isPalindrome(data)).toBeTruthy()
  })
  it('checks if the given number is palindrome', () => {
    const data = -121
    expect(isPalindrome(data)).toBeFalsy()
  })
  it('checks if the given number is palindrome', () => {
    const data = 10
    expect(isPalindrome(data)).toBeFalsy()
  })
  it('checks if the given number is palindrome', () => {
    const data = -101
    expect(isPalindrome(data)).toBeFalsy()
  })
})
