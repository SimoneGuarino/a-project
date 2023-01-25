const arr: number[] = [2,3,6,4,5];

let summ: number = 0;

function SummMed(arr: number[]):number {
    for(let num of arr){
        summ += num;
    }
    return summ;
}
function Media(arr: number[]):number {
    return summ / arr.length;
}

const Minimo = (arr: number[]): number => {
    let min = arr[0];
    for(let n of arr){
        if(n < min){
            min = n;
        }
    }
    return min;
};
const Massimo = (arr: number[]): number => {
    let max = arr[0];
    for(let n of arr){
        if(n > max){
            max = n;
        }
    }
    return max;
};

console.log(`Somma = ${SummMed(arr)}`)
console.log(`Media = ${Media(arr)}`)
console.log(`Minimo = ${Minimo(arr)}`)
console.log(`Massimo = ${Massimo(arr)}`)