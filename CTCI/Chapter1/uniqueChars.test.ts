import { validateSameLetter, validateSameLetterAsString } from './uniqueChars'

describe('validateSameLetter', () => {
  it('returns true if the string consists of unique letters', () => {
    expect(validateSameLetter('abcdefghijklmn')).toBeTruthy()
  })

  it('returns false if the string dose not consist of unique letters', () => {
    expect(validateSameLetter('abcdefgb')).toBeFalsy()
  })
})

describe('validateSameLetterAsString', () => {
  it('returns true if the string consists of unique letters', () => {
    expect(validateSameLetterAsString('abcdefghijklmn')).toBeTruthy()
  })

  it('returns false if the string dose not consist of unique letters', () => {
    expect(validateSameLetterAsString('abcdefgb')).toBeFalsy()
  })
})
