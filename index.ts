/**
 * function applying search binary using recursive function
 * @param list
 * @param firstIndex
 * @param lastIndex
 * @param numberToSearch
 */
function binarySearchRecursive(list: number[], firstIndex: number, lastIndex: number, numberToSearch: number): number {
    if(lastIndex - firstIndex == 1) return -1;
    let middleIndex: number = Math.ceil((firstIndex + lastIndex) / 2);
    const number: number = list[middleIndex];
    if(number == numberToSearch) return middleIndex;
    else if(number < numberToSearch)
        return binarySearchRecursive(list, middleIndex++, lastIndex, numberToSearch);
    else if(number > numberToSearch)
        return binarySearchRecursive(list, 0, middleIndex--, numberToSearch);
    return -1;
}

/**
 * binary search to find index of a number without use recursive function
 * @param list
 * @param firstIndex
 * @param lastIndex
 * @param numberToSearch
 */
function binarySearch(list: number[], firstIndex: number, lastIndex: number, numberToSearch: number): number {

    while(true) {
        if(lastIndex - firstIndex == 1) return -1;
        let middleIndex: number = Math.ceil((firstIndex + lastIndex) / 2);
        const middleIndexNumber: number = list[middleIndex];
        if(middleIndexNumber == numberToSearch) return middleIndex;
        else if(middleIndexNumber < numberToSearch) firstIndex = middleIndex++;
        else if(middleIndexNumber > numberToSearch){
            firstIndex = 0;
            lastIndex = middleIndex--;
        } else return -1;
    }
}

/**
 *
 * @param list
 */
function sortNumbers(list: number[]): number[] {
    return list.sort((a: number, b: number) => a-b);
}

/**
 *
 * @param numberList
 * @param number
 * return numberIndex else -1
 */
export function bs(numberList: number[], number: number): number {
    const numbersSorted: number[] = sortNumbers(numberList);
    return binarySearch(numbersSorted, 0, numbersSorted.length - 1, number);
}

