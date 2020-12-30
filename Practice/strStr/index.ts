function strStr(haystack: string, needle: string): number {
    if(needle === "") return 0

    return haystack.indexOf(needle)
};

export { strStr }