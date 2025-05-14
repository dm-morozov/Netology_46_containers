// Character.js
import Validator from "./Validator.js";

export default class Character {
  constructor(name, type) {
    const validator = new Validator(name);
    validator.validateUsername(); // Бросит ошибку, если имя некорректно

    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (!types.includes(type)) {
      throw new Error(`Тип должен быть одним из: ${types.join(", ")}`);
    }

    this.name = name;
    this.type = type;
    Object.defineProperty(this, "type", {
      value: type,
      writable: false,
      configurable: false,
      enumerable: true,
    });
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
    this.special = [];
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Нельзя повысить левел умершего");
    }
    if (this.attack === undefined || this.defence === undefined) {
      throw new Error("Нельзя повысить уровень: attack или defence не заданы");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.defence === undefined) {
      throw new Error("Нельзя нанести урон: defence не задано");
    }
    this.health = Math.max(0, this.health - points * (1 - this.defence / 100));
  }

  orderByProps(order) {
    const result = [];
    const resultOtherProps = [];

    // console.log(order);
    // console.log(Object.entries(obj));
    for (const key of order) {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        result.push({ key, value: this[key] });
      }
    }
    for (const key in this) {
      if (
        Object.prototype.hasOwnProperty.call(this, key) &&
        !order.includes(key)
      ) {
        resultOtherProps.push({ key, value: this[key] });
      }
    }
    resultOtherProps.sort((a, b) => a.key.localeCompare(b.key));
    return [...result, ...resultOtherProps];
  }

  getSpecialAttack() {
    return (this.special || []).map(
      ({ id, name, icon, description = "Описание недоступно" }) => ({
        id,
        name,
        icon,
        description,
      }),
    );
  }
}
