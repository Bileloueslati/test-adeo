import data from "../data.js";

const count = (log = true) => {
  const newList = data.map((country) => {
    country.people.map((person) => {
      person.name += ` [${person.animals.length}]`;
      return person;
    });
    country.name += ` [${country.people.length}]`;
    return country;
  });

  const jsonString = JSON.stringify(newList);

  log && console.log(jsonString);

  return jsonString;
};

export default count;
