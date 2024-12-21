
function binarySearch(list: number[], firstIndex: number, lastIndex: number, numberToSearch: number): number {
    if(lastIndex - firstIndex == 1) return -1;
    let middleIndex: number = Math.ceil((firstIndex + lastIndex) / 2);
    const number: number = list[middleIndex];
    if(number == numberToSearch) return middleIndex;
    else if(number < numberToSearch)
        return binarySearch(list, middleIndex++, lastIndex, numberToSearch);
    else if(number > numberToSearch)
        return binarySearch(list, 0, middleIndex--, numberToSearch);
    return -1;
}

export function bs(numberList: number[], number: number): number {
    return binarySearch(numberList, 0, numberList.length - 1, number);
}

