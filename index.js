import { createInterface } from "node:readline/promises";
import dateConvesionMoment from "./src/minitask-1.js";
import dateConversionWithoutMoment from "./src/minitask-2.js";

(async () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const answer = await rl.question("Masukkan tanggal \n");

    dateConvesionMoment(answer);
    dateConversionWithoutMoment(answer);
  } catch (error) {
    console.log(error);
  } finally {
    rl.close();
  }
})();

// Minitask-3 Eslint

// 1.no-const-assign
// Untuk membuat aturan agar const tidak bisa di re-assign
// const a = 0;
// a = 1;

// 2.no-empty
// Untuk membuat aturan agar tidak boleh ada blok kosong
// if (true) {
// }

// 3.no-extra-semi
// Untuk membuat aturan agar tidak boleh ada double semicolon
// var x = 5;;

// 4.array-bracket-spacing
// Untuk membuat aturan agar tidak boleh ada spasi di dalam [] saat membuat array
// var arr = [ 'foo', 'bar' ];

// 5.arrow-spacing
// Untuk membuat aturan agar setelah dan sebelum arrow saat membuat arrow function harus ada spasi
// ()=>{}
