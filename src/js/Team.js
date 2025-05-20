export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error("Персонаж уже в команде");
    }
    this.members.add(character);
    return this;
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
    return this;
  }

  toArray() {
    return [...this.members];
  }
}
