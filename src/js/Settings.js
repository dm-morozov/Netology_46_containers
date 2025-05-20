// Settings.js

export default class Settings {
  constructor() {
    // Настройки по умолчанию
    this.defaultSettings = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    // Пользовательские настройки (пустой Map)
    this.userSettings = new Map();
  }

  // Метод для установки пользовательской настройки
  setSetting(key, value) {
    const validSettings = {
      theme: ["dark", "light", "gray"],
      music: ["trance", "pop", "rock", "chillout", "off"],
      difficulty: ["easy", "normal", "hard", "nightmare"],
    };

    if (!validSettings[key] || !validSettings[key].includes(value)) {
      throw new Error("Такого ключа или значения быть не может!");
    }

    // Устанавливаем пользовательскую настройку
    this.userSettings.set(key, value);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
