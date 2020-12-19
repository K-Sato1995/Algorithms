export const permutation = (s1: string, s2: string) => {
    if(s1.length !== s2.length) return false

    const s1Array = s1.split('').sort()
    const s2Array = s2.split('').sort()

    return  JSON.stringify(s1Array) ===  JSON.stringify(s2Array)
}