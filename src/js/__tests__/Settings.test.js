// Settings.test.js

import Settings from "../Settings";
describe("Settings", ()=> {
  let settings;

  beforeEach(()=> {
    settings = new Settings();
  });

  test("Должна вернуть настройки по умолчанию", () => {
    const expected = new Map ([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    expect(settings.settings).toEqual(expected);
  })
})