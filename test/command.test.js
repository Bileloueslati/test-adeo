import Args from "../helpers/yargs.js";

describe("Check the commands are well resolved", () => {
  test("Must return true if it's a filter command", () => {
    const args = new Args([null, null, "--filter=ry"]);

    const condition =
      (args.has("--filter") || args.has("filter")) && args.hasOne;

    expect(condition).toBe(true);
  });

  test("Must return true if it's a count command", () => {
    const args = new Args([null, null, "--count"]);

    const condition =
      (args.has("--count") || args.has("count")) && args.hasOne;

    expect(condition).toBe(true);
  });

  test("Must return true if command combines filter and count commands", () => {
    const args = new Args([null, null, "--count", "--filter"]);

    const condition =
      args.length === 2 && args.has("--filter") && args.has("--count");

    expect(condition).toBe(true);
  });

  test("Must return true if command combines filter and count commands and animal name arg is parsed", () => {
    const args = new Args([null, null, "--count", "--filter=ry"]);

    const condition =
      args.length === 2 && args.has("--filter") && args.has("--count");

    expect(condition).toBe(true);

    const filterCmd = args.find("=");

    expect(filterCmd).toBeTruthy();

    const filterCmdArg = filterCmd.split("=")[1];

    expect(filterCmdArg).toBe("ry");
  });
});
