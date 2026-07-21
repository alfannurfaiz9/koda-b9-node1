const dateConversionWithoutMoment = (answer) => {
  const arrs = answer.split("");
  let isValid = true;

  if (arrs[2] !== "-" || arrs[5] !== "-") {
    isValid = false;
  }

  for (let i = 0; i < arrs.length; i++) {
    if (i === 2 || i === 5) {
      continue;
    }

    if (arrs[i].charCodeAt(0) < 48 || arrs[i].charCodeAt(0) > 57) {
      isValid = false;
      break;
    }
  }

  if (!isValid) {
    console.log("Format tanggal salah");
  } else {
    arrs[2] = "/";
    arrs[5] = "/";

    console.log(arrs.join(""));
  }
};

export default dateConversionWithoutMoment;
