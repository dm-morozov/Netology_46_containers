// characters.js
import Character from "./Character.js";

export class Bowerman extends Character {
  constructor(name) {
    super(name, "Bowerman");
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
  }
}
