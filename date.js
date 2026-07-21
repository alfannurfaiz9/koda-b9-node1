const tanggal = new Date("09-04-2024").toLocaleDateString();
const arrs = tanggal.split("/");
const a = [];

if (arrs[0].length <= 1) {
  a.push("0" + arrs[0]);
} else {
  a.push(arrs[0]);
}

if (arrs[1].length <= 1) {
  a.push("0" + arrs[1]);
} else {
  a.push(arrs[1]);
}

a.push(arrs[2]);

console.log(a);
