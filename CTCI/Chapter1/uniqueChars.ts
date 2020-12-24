// Convert the string to array and brute force = O(N * 2)
const validateSameLetter = (s: string): boolean => {  
    const stringArr = s.split('')
    const arrLength = stringArr.length

    for(let i = 0; i < arrLength; i++) {
        for(let j = i + 1; j < arrLength; j++) {
            if(stringArr[i] === stringArr[j]) return false
        }
    }
    return true
}

// When u can't convert string into an array
const validateSameLetterAsString = (s: string): boolean => {  
    const stLength = s.length

    for(let i = 0; i < stLength; i++) {
        for(let j = i + 1; j < stLength; j++) {
            if(s.charAt(i) ===s.charAt(j)) return false
        }
    }
    return true
}

export { validateSameLetter, validateSameLetterAsString }