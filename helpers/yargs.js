export default class Args {
  /**
   * @param {string[]} args
   */
  constructor(args) {
    this.args = args.slice(2);
  }

  get isEmpty() {
    return !this.args.length;
  }

  get toString() {
    return this.args.join(" ");
  }

  /**
   * @param {number} index
   */

  at(index) {
    return this.args[index];
  }

  /**
   * @param {string} str
   */

  has(str) {
    return this.args.some((arg) => {
      return arg.includes(str);
    });
  }

  get hasOne() {
    return this.args.length === 1;
  }

  get length() {
    return this.args.length;
  }

  /**
   *
   * @param {string} el
   */
  find(el) {
    return this.args.find((arg) => arg.includes(el));
  }
}
