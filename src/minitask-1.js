import moment from "moment";

const dateConvesionMoment = (answer) => {
  const format = moment(answer, "DD-MM-YYYY", true).format("DD/MM/YYYY");

  if (format === "Invalid date") {
    throw new Error("Format tanggal salah");
  } else {
    console.log(format);
    return format;
  }
};

export default dateConvesionMoment;
