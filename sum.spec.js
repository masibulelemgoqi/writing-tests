const sum = require("./sum");
describe("Sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("adds 4 + 4 to equal 8", () => {
    expect(sum(4, 4)).toBe(8);
  });
});
