
function binarySearch(list: number[], firstIndex: number, lastIndex: number, numberToSearch: number): number {
    let middleIndex: number = Math.ceil((firstIndex + lastIndex) / 2);
    if(list[middleIndex] < numberToSearch) {
        return binarySearch(list, middleIndex++, lastIndex, numberToSearch);
    } else if(list[middleIndex] > numberToSearch) {
        return binarySearch(list, 0, middleIndex--, numberToSearch);
    } else if(list[middleIndex] == numberToSearch) return middleIndex;
    return -1;
}

export function bs(numberList: number[], number: number): number {
    return binarySearch(numberList, 0, numberList.length - 1, number);
}

const list: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const number: number = 10;
/*console.time("binary search");
console.log(bs(list, number));
console.timeEnd("binary search");

console.time("find function");
console.log(list.findIndex(value => value == number));
console.timeEnd("find function");*/

