import { createInterface } from "node:readline/promises";
import dateConvesionMoment from "./src/minitask-1.js";
import dateConversionWithoutMoment from "./src/minitask-2.js";

(async () => {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question("Masukkan tanggal \n");

  dateConvesionMoment(answer);
  dateConversionWithoutMoment(answer);

  rl.close();
})();
