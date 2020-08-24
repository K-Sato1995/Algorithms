const linearSearch = (list: number[], target: number) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) return true;
  }

  return false;
};

export { linearSearch };
