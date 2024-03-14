export const truncateWords = (input: string, maxWords: number): string => {
  const words = input.split(' ');
  if (words.length <= maxWords) {
    return input;
  }
  return `${words.slice(0, maxWords).join(' ')}...`;
};
