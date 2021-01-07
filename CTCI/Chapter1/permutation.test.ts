import { permutation } from './permutation'

describe('Permutation', () => {
  it('returns true if the given two strings consist of the same letters', () => {
    expect(permutation('dog', 'god')).toBeTruthy()
  })
  it('returns true if the given two strings consist of the same letters', () => {
    expect(permutation('permutation', 'emrntauotpi')).toBeTruthy()
  })
  it('returns true if the given two strings consist of the same letters', () => {
    expect(permutation('dg', 'god')).toBeFalsy()
  })
  it('returns true if the given two strings consist of the same letters', () => {
    expect(permutation('dgdfsf', 'gofdsfsd')).toBeFalsy()
  })
})
