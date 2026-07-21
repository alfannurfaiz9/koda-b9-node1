import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import moment from "moment";

(async () => {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question("Masukkan tanggal \n");

  const format = moment(answer, "DD-MM-YYYY", true).format("DD/MM/YYYY");

  if (format !== "Invalid date") {
    console.log(format);
  } else {
    console.log("Format tanggal salah");
  }

  rl.close();
})();
