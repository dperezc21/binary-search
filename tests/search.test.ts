import {expect, test} from '@jest/globals';
import searchBinary = require('../index');

const list: number[] = [1,2,3,4,5,6,7,8,9];

describe('binary search correct', () =>{
    test('find number five', () => {
        const numberToSearch: number = 5;
        expect(searchBinary.bs(list, numberToSearch)).toBe(4);
    });

    test('number not found', () => {
        const numberToSearch: number = 10;
        expect(searchBinary.bs(list, numberToSearch)).toBe(-1);
    });
});