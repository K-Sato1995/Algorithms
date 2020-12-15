import { romanToInt } from "./romanToInt";

describe("RomanToInt", () => {
  it("converts numerals to numbers", () => {
    const data = "III";
    expect(romanToInt(data)).toEqual(3);
  });
});
