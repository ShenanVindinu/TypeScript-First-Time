function add(a: number, b: number) {
    return a + b;
}

console.log('hello world', add(1, 2));

let sum: number = 0;
let sum1: number | boolean = true;
let sum2: number | boolean | string = "shenan";

console.log(sum, sum1, sum2);