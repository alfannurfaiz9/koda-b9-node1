import { createInterface } from "node:readline/promises";
import moment from "moment";

(async () => {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question("Masukkan tanggal \n");

  const format = moment(answer, "DD-MM-YYYY", true).format("DD/MM/YYYY");

  if (format === "Invalid date") {
    console.log("Format tanggal salah");
  } else {
    console.log(format);
  }

  rl.close();
})();
