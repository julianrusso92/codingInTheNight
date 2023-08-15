import { describe, expect, expectTypeOf, it } from "vitest";
import { sumPairs } from "./sumPairs";

describe("Sum Pairs test", () => {
  it("Exists sumPairs function", () => {
    expectTypeOf(sumPairs).toBeFunction();
  });

  it("Should return null with arg 0: []", () => {
    const expected = null;
    const result = sumPairs([], 10);

    expect(result).toBe(expected);
  });

  // it("Should return error if arg 0 ")

  it("Should be return 3,7", () => {
    // sumPairs([3, 5, 7, 2], 10) // [3, 7]
    const expected = [3, 7];
    const result = sumPairs([3, 5, 7, 2], 10);

    expect(result).toStrictEqual(expected);
  });

  it("Should be null", () => {
    // sumPairs([-3, -2, 7, -5], 10) // null

    const expected = null;
    const result = sumPairs([-3, -2, 7, -5], 10);

    expect(result).toStrictEqual(expected);
  });

  it("Should be 2,2", () => {
    // sumPairs([2, 2, 3, 1], 4) // [2, 2]

    const expected = [2, 2];
    const result = sumPairs([2, 2, 3, 1], 4);

    expect(result).toStrictEqual(expected);
  });

  it("Should be 6,2", () => {
    // sumPairs([6, 7, 1, 2], 8) // [6, 2]

    const expected = [6, 2];
    const result = sumPairs([6, 7, 1, 2], 8);

    expect(result).toStrictEqual(expected);
  });

  it("Should be 1,5", () => {
    //   sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]

    const expected = [1, 5];
    const result = sumPairs([0, 2, 2, 3, -1, 1, 5], 6);

    expect(result).toStrictEqual(expected);
  });
});
