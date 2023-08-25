import {describe, expect, test} from '@jest/globals';
import ReverseArray from '../src/index'
describe('Arraytest', () => {
  test('Reverses array 1-10 into 10-1', () => {
    let initialarray:Array<number> = [1,2,3,4,5,6,7,8,9,10]
    let reversedarray:Array<number> = [10,9,8,7,6,5,4,3,2,1]
    expect(ReverseArray(initialarray)).toStrictEqual(reversedarray);
  });
});
