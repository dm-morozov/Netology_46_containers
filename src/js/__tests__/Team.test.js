// Team.test.js

import Character from "../Character.js";
import Swordsman from "../Swordsman.js";
import Team from "../Team.js";
import Zombie from "../Zombie.js";

describe("Team", () => {
  let team, zombie, swordsman, character1, character2;

  beforeEach(() => {
    team = new Team();
    zombie = new Zombie("Zombie");
    swordsman = new Swordsman("Swordsman");
    character1 = new Character("Daemon", "Daemon");
    character2 = new Character("Bowman", "Bowman");
  });

  test("Проверим добавление персонажа", () => {
    team.add(zombie);
    expect(team.toArray()).toEqual([zombie]);
    expect(team.members.size).toBe(1);
  });

  test("Выбрасываем исключение, если пытаемся добавить такогоже персонажа", () => {
    team.add(swordsman);
    expect(() => team.add(swordsman)).toThrow("Персонаж уже в команде");
  });

  test("Тестируем добавление сразу несколько персанажей в команду addAll, проверяем нет ли дубликатов", () => {
    team.addAll(zombie, swordsman, character1, character2, zombie, character2);
    expect(team.toArray()).toEqual([zombie, swordsman, character1, character2]);
    expect(team.members.size).toBe(4);
  });
});
