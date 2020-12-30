function halvesAreAlike(s: string): boolean {
    const middle = Math.floor(s.length / 2)
    const a = s.slice(0, middle);
    const b = s.slice(middle);

    const aVowelNum = numerOfVowles(a)
    const bVowelNum = numerOfVowles(b)

    return aVowelNum === bVowelNum
};


const numerOfVowles = (str: string): number => {
    return (str.match(/a|e|i|o|u|A|E|I|O|U/gm)|| []).length
}

