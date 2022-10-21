import filter from "./filter.js";

/**
 * @param {string} qs
 */

const countAndFilter = (qs) => {
  const result = filter(qs, false);

  result.forEach((country, i) => {
    country.name += ` [${country.people.length}]`;
    country.people.forEach((p) => {
      p.name += ` [${p.animals.length}]`;
    });
  });

  console.log(JSON.stringify(result));

  return result;
};

export default countAndFilter;
