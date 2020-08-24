const linerSearch = (list: number[], target: number) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) return true;
  }

  return false;
};

// console.log(linerSearch([2, 3, 4], 5));
export { linerSearch };
