const dateConversionWithoutMoment = (answer) => {
  const input = answer.split("-");
  let arrs = "";
  let isValid = true;

  if (
    isNaN(Number(input[0])) ||
    Number(input[0]) > 31 ||
    isNaN(Number(input[1])) ||
    Number(input[1]) > 12 ||
    isNaN(Number(input[2]))
  ) {
    isValid = false;
  }

  for (let i = 0; i < answer.length; i++) {
    if (answer.charCodeAt(i) === 45) {
      arrs += String.fromCharCode(answer.charCodeAt(i) + 2);
    } else {
      arrs += answer[i];
    }
  }

  if (!isValid) {
    throw new Error("Format tanggal salah");
  } else {
    console.log(arrs);
    return arrs;
  }
};

export default dateConversionWithoutMoment;
