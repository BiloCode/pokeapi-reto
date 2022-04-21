const MAX_DIGITS = 3;

const idNumberFormat = (id: number) => {
  const stringId = id.toString();
  const idLetterAmount = stringId.split("").length;

  if (idLetterAmount > MAX_DIGITS) {
    return stringId;
  }

  const digistList = [...new Array(MAX_DIGITS - idLetterAmount)];
  const digits = digistList.map((_) => "0").join("");

  return digits + stringId;
};

export default idNumberFormat;
