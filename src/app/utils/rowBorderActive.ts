const rowBorderActive = (index: number, list: any[]) => {
  const listLength = list.length;

  const isOdd = index % 2 !== 0;
  const isListLengthOdd = listLength % 2 !== 0;

  const isLastIndex = index === listLength - 1;

  if (isLastIndex) {
    return isListLengthOdd || isOdd;
  }

  return isOdd;
};

export default rowBorderActive;
