function isPalindrome(x: number): boolean {
  const arr = x.toString().split('')

  for (let i = 0; i < arr.length; i++) {
    const tmp = arr[i]
    const popedVal = arr.pop()

    if (tmp !== popedVal) {
      return false
    }
  }

  return true
}
