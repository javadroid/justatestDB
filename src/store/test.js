let now = Date.now();
let then = new Date('2023-07-06 12:10 pm').getTime();
const TWENTY_MINUTES = 20 * 60 * 1000;
console.log(now, then, now - then);
console.log(then + TWENTY_MINUTES > now);