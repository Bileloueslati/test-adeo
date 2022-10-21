import data from "../data.js";

export class InvalidArgumentException extends Error {
  constructor() {
    super(
      "Please provide an annimal name to filter animals by this name. Exemple: filter=ry"
    );
    this.name = "ValidationError";
  }
}

/**
 * @throws {InvalidArgumentException} if qs is falsy
 * @param {string} qs
 * @param {boolean} log
 * @param {string} format
 * @returns {data}
 */

const filter = (qs, log = true, format = "object") => {
  if (!qs) {
    throw new InvalidArgumentException();
  }

  const newList = data.filter((country) => {
    let newCountry = country;
    newCountry.people = country.people.filter((p) => {
      let newPerson = p;
      newPerson.animals = removeNonMatching(qs, p);

      // The 'animals' entry will be removed if there is nothing left inside
      return !isEmpty(newPerson.animals);
    });

    // The 'people' entry will be removed if there is nothing left inside
    return !isEmpty(newCountry.people);
  });

  // prints out the filtered list if there is any match

  log &&
    console.log(isEmpty(newList) ? "Nothing found" : JSON.stringify(newList));

  return format === "string" ? JSON.stringify(newList) : newList;
};

/**
 * Filters out every animal that does not match the string pattern
 * @param {string} name
 * @param {{name: string, animals : {name: string}[]}} person
 */

const removeNonMatching = (name, person) =>
  person.animals
    .map((animal) => (animal.name.includes(name) ? animal : null))
    .filter((e) => e);

/**
 * @param {array<any>} arr
 */

const isEmpty = (arr) => Array.isArray(arr) && arr.length == 0;

export default filter;
