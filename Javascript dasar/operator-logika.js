const nilaiUjian = 70;
const nilaiAbsen = 70;

const lulusUjian = nilaiUjian > 75;
const lulusAbsen = nilaiAbsen > 75;

const lulus = lulusUjian && lulusAbsen;
console.log(lulus)