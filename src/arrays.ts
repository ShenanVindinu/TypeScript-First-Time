const ar7 = ["a", "b"];
const ar8 = ["c", "d","e"];
const ar6 = [...ar7, ...ar8];

ar6.push(...ar8)

console.log(ar6);