const evenNumber = require("./even-number");

describe("Even numbers", () => {
  it("10 to be even", () => {
    expect(evenNumber(10)).toBe("even");
  });
  it("2 to be even", () => {
    expect(evenNumber(2)).toBe("even");
  });
  it("6 to be even", () => {
    expect(evenNumber(6)).toBe("even");
  });
});
