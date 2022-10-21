import filter from "../functions/filter.js";

describe("filter test", () => {
  it("should show the animals matching with the ry string pattern", () => {
    const result = filter("ry", false, "string");

    expect(result).toEqual(
      '[{"name":"Uzuzozne","people":[{"name":"Lillie Abbott","animals":[{"name":"John Dory"}]}]},{"name":"Satanwi","people":[{"name":"Anthony Bruno","animals":[{"name":"Oryx"}]}]}]'
    );
  });
});
