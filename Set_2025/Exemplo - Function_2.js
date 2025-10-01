const somaArray = function (array, valor) {
    for (let item in array) {
        array [item] += valor;
    }
    return array;
}

console.log(somaArray([5, 10, 15],5));