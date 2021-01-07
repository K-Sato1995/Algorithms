const URLify = (s: string, length: number) => {
  const stArr = s.trim().split('')

  for (let i = 0; i < length; i++) {
    if (stArr[i] === ' ') {
      stArr[i] = '%20'
    }
  }

  return stArr.join('')
}

export { URLify }
