// Settings.test.js

import Settings from "../Settings";
describe("Settings", () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  test("Должна вернуть настройки по умолчанию", () => {
    const expected = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    expect(settings.settings).toEqual(expected);
  });

  test("Попробуем добавить пользовательскую настройку", () => {
    settings.setSetting("music", "rock");
    const expected = new Map([
      ["theme", "dark"],
      ["music", "rock"],
      ["difficulty", "easy"],
    ]);
    expect(settings.settings).toEqual(expected);
  });

  test("Попробуем ввести недействительный ключ", () => {
    expect(() => settings.setSetting("IDontKnow", "rock")).toThrow(
      "Такого ключа или значения быть не может!",
    );
  });

  test("Попробуем ввести недействительное значение", () => {
    expect(() => settings.setSetting("music", "IDontKnow")).toThrow(
      "Такого ключа или значения быть не может!",
    );
  });
});
