// getSpecialAttack.test.js
import Character from "../Character.js";

describe("getSpecialAttack", () => {
  let character;

  beforeEach(() => {
    character = new Character("Archer", "Bowman");
    character.special = [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http://...",
        description: "Двойной выстрел наносит двойной урон",
      },
      {
        id: 9,
        name: "Нокаутирующий удар",
        icon: "http://...",
        // <- обратите внимание, описание "засекречено"
      },
    ];
    character.attack = 40;
    character.defence = 10;
  });

  test("Тестируем атаки", () => {
    const result = character.getSpecialAttack();
    const expected = [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http://...",
        description: "Двойной выстрел наносит двойной урон",
      },
      {
        id: 9,
        name: "Нокаутирующий удар",
        icon: "http://...",
        description: "Описание недоступно",
      },
    ];
    expect(result).toEqual(expected);
  });

  test("Обрабатываем пустой массив special", () => {
    character.special = []; // обнуляем special
    const result = character.getSpecialAttack();
    expect(result).toEqual([]);
  });

  test("Обрабатываем отсутствие special", () => {
    // Случай когда special равен undefined
    delete character.special;
    expect(character.getSpecialAttack()).toEqual([]);
  });
});
