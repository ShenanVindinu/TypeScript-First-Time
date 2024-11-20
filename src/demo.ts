let ar = []; // never type array

let ar1 = ['a', 'b', 'c']; // string type array
let ar2 = [1, 2, 3, 4, 5];  // number type array
let ar3 = [1, 'b', false];  // any type array

let ar4 = Array<string>

let ar5 : string[];

ar1.forEach((e) =>(
    console.log(e)
));

function printArray(ar : number[]){
    ar.forEach(element => {
        console.log(element)
    });
}

// printArray(ar1); // since type of array in the function is number type we can't pass ar1 as an argument
printArray(ar2);