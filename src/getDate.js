import moment from "moment";

const getDate = (answer) => {
  const format = moment(answer, "DD-MM-YYYY", true).format("DD/MM/YYYY");

  if (format === "Invalid date") {
    console.log("Format tanggal salah");
  } else {
    console.log(format);
  }
};

export default getDate;
