// orderByProps.test.js
import Character from "../Character.js";

describe("orderByProps", () => {
  let character;

  beforeEach(() => {
    // Создаём экземпляр Character перед каждым тестом
    character = new Character("Archer", "Bowman");
    // Задаём attack и defence для полноты тестов
    character.attack = 40;
    character.defence = 10;
  });

  test("сортирует свойства по порядковому массиву и по алфавиту", () => {
    const order = ["name", "level"];
    const expected = [
      { key: "name", value: "Archer" },
      { key: "level", value: 1 },
      { key: "attack", value: 40 },
      { key: "defence", value: 10 },
      { key: "health", value: 100 },
      { key: "special", value: [] },
      { key: "type", value: "Bowman" },
    ];
    expect(character.orderByProps(order)).toEqual(expected);
  });

  test("обрабатывает пустой массив order", () => {
    const order = [];
    const expected = [
      { key: "attack", value: 40 },
      { key: "defence", value: 10 },
      { key: "health", value: 100 },
      { key: "level", value: 1 },
      { key: "name", value: "Archer" },
      { key: "special", value: [] },
      { key: "type", value: "Bowman" },
    ];
    expect(character.orderByProps(order)).toEqual(expected);
  });

  test("обрабатываем несуществующие свойства", () => {
    const order = ["name", "unknown"];
    const expected = [
      { key: "name", value: "Archer" },
      { key: "attack", value: 40 },
      { key: "defence", value: 10 },
      { key: "health", value: 100 },
      { key: "level", value: 1 },
      { key: "special", value: [] },
      { key: "type", value: "Bowman" },
    ];
    expect(character.orderByProps(order)).toEqual(expected);
  });

  // Потренируемся с новой темой и добавим тест с defineProperty
  test("игнорируем неперечисляемые свойства", () => {
    Object.defineProperty(character, "secret", {
      value: "hidden",
      writable: true, // это свойство позволяет изменять значение свойства
      configurable: true, // это свойство позволяет удалять и изменять свойства
      enumerable: false, // это свойство позволяет перечислять свойства
    });
    const order = ["name", "type"];
    const expexted = [
      { key: "name", value: "Archer" },
      { key: "type", value: "Bowman" },
      { key: "attack", value: 40 },
      { key: "defence", value: 10 },
      { key: "health", value: 100 },
      { key: "level", value: 1 },
      { key: "special", value: [] },
    ];
    expect(character.orderByProps(order)).toEqual(expexted);
  });
});
