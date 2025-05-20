// ErrorRepository.js

export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [100, "Недостаточно здоровья"],
      [200, "Неверный тип персонажа"],
      [300, "Неверное имя"],
    ]);
  }

  translate(code) {
    // Возвращаем описание или 'Unknown error', если код не найден
    return this.errors.get(code) || "Unknown error";
  }
}
