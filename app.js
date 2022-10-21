("use strict");
import count from "./functions/count.js";
import filter from "./functions/filter.js";
import countAndFilter from "./functions/countAndfilter.js";
import { argv } from "node:process";
import Args from "./helpers/yargs.js";

// USAGE: node app.js --filter=[qs] OR node app.js filter=[qs]
// USAGE: node app.js --count OR node app.js count
// USAGE: node app.js --count OR node app.js countAndFilter=[qs]

try {
  const args = new Args(argv);

  if (args.isEmpty) {
    throw new Error("Please specify a command to run");
  }

  switch (true) {
    case (args.has("--filter") || args.has("filter")) && args.hasOne:
      let qs = args.toString.split("=")[1];

      filter(qs);
      break;

    case (args.has("--count") || args.has("count")) && args.hasOne:
      count();
      break;

    case args.length === 2 && args.has("--filter") && args.has("--count"):
      const filterCmd = args.find("=");

      countAndFilter(filterCmd ? filterCmd.split("=")[1] : null);

      break;

    default:
      console.log(`This command "${args.toString}" is not supported`);
  }
} catch (e) {
  console.log(e?.message || "An error has occurred");
}
