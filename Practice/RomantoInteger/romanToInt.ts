// type romanNums = "I" | "V" | "X" | "L" | "C" | "D" | "M"

const romanIntTable: Record<string, number> = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  
export function romanToInt(s: string): number {
    // 文字列を配列にしてループ
    const romanArr = s.split('')
    let result = 0

    for(let i = 0; i < romanArr.length; i++){
        if(romanIntTable[romanArr[i]] < romanIntTable[romanArr[i + 1]] ){
            result = result - romanIntTable[romanArr[i]]
        } else {
            result += romanIntTable[romanArr[i]]
        }
    }

    return result
};

