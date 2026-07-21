import { createInterface } from "node:readline/promises";
import getDate from "./src/getDate.js";

(async () => {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question("Masukkan tanggal \n");

  getDate(answer);

  rl.close();
})();
