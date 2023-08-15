import { describe, expect, expectTypeOf, it } from "vitest";
import { hourglassSum } from "./LeftRotation";

describe("2D Array - DS", () => {
  it("Should throw error because of not have 6 rows", () => {
    const argument = [[1]];
    const expected = "Must be have 6 rows";
    expect(() => hourglassSum(argument)).toThrowError(expected);
  });

  it("Should throw error if arr[i][j] <9 and >-9", () => {
    const arr: number[][] = [
      [0, 0, 0, 0, 0, 0],
      [0, 10, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];

    const expected = "Value of arr[i][j] must be between -9 and 9";
    expect(() => hourglassSum(arr)).toThrowError(expected);
  });

  it("Should return 0 to 6x6 matrix with 0", () => {
    const matrixArrr = new Array(6).fill(0).map((x) => new Array(6).fill(0));
    const result = hourglassSum(matrixArrr);
    expect(result).toBe(0);
  });

  it("Should return 0 to 6x6 matrix with 1 in invalid position", () => {
    const arr: number[][] = [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];

    const result = hourglassSum(arr);
    const expected = 1;
    expect(result).toBe(expected);
  });

  // it('Should return 1 to 6x6 matrix with 1 in valid position', () => {
  //     const matrixArrr = new Array(6).fill(0).map(x => new Array(6).fill(0));
  //     console.log("🚀 ~ file: index.test.ts:20 ~ it ~ matrixArrr:", matrixArrr)
  //     const result = hourglassSum(matrixArrr);
  //     expect(result).toBe(0);
  // });

  // it('Should return error if arr[i][j] not between -9 and 9', () => {

  // });

  it("Should return 28 for this arg", () => {
    const arr: number[][] = [
      [-9, -9, -9, 1, 1, 1],
      [0, -9, 0, 4, 3, 2],
      [-9, -9, -9, 1, 2, 3],
      [0, 0, 8, 6, 6, 0],
      [0, 0, 0, -2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ];

    const expected = 28;

    const result = hourglassSum(arr);

    expect(result).toBe(expected);
  });

  it("Should return 19 for this arg", () => {
    const arr: number[][] = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ];

    const expected = 19;

    const result = hourglassSum(arr);

    expect(result).toBe(expected);
  });

  it("Must return 0", () => {
    const arr: number[][] = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, -9],
    ];

    const expected = 0;

    const result = hourglassSum(arr);

    expect(result).toBe(expected);
  });
});
