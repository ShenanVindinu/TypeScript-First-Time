//passing functions as arguments
type addType = (n1: number, n2: number) => number;

//
//ex 1

function addSum(n1: number, n2: number = 20) {
    return n1 + n2;
}


function calculate1(n1: number, n2: number, addSumFn: addType) {
    const result = addSumFn(n1, n2);
    console.log(result);
}

calculate1(10, 20, addSum);

//ex 2

function addSub(n1: number, n2: number = 20) {
    return n1 - n2;
}

function calculate2(n1: number, n2: number, addSubFn: addType) {
    const result = addSubFn(n1, n2);
    console.log(result);
}


calculate2(10, 20, addSub);

