const dateConversionWithoutMoment = (answer) => {
  const input = answer.split("-");
  const arrs = answer.split("");
  let isValid = true;

  if (arrs[2] !== "-" || arrs[5] !== "-") {
    isValid = false;
  } else if (Number(input[0]) > 31) {
    isValid = false;
  } else if (Number(input[1] > 12)) {
    isValid = false;
  }

  for (let i = 0; i < arrs.length; i++) {
    if (i === 2 || i === 5) {
      continue;
    } else if (arrs[i].charCodeAt(0) < 48 || arrs[i].charCodeAt(0) > 57) {
      isValid = false;
      break;
    }
  }

  if (!isValid) {
    throw new Error("Format tanggal salah");
  } else {
    arrs[2] = "/";
    arrs[5] = "/";

    console.log(arrs.join(""));
    return arrs.join("");
  }
};

export default dateConversionWithoutMoment;
