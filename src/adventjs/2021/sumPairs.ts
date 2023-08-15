const sumPairs = (numbers: number[], result: number) => {
  const lenght = numbers.length;

  for (let x = 0; x < lenght; x++) {
    for (let y = x + 1; y < lenght; y++) {
      if (numbers[x] + numbers[y] === result) return [numbers[x], numbers[y]];
    }
  }

  return null;
};

export { sumPairs };
