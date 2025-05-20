// ErrorRepository.test.js

import ErrorRepository from "../ErrorRepository";

describe("ErrorRepository", () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  test("Проверка кодов ошибок", () => {
    expect(errorRepo.translate(100)).toBe("Недостаточно здоровья");
    expect(errorRepo.translate(200)).toBe("Неверный тип персонажа");
    expect(errorRepo.translate(300)).toBe("Неверное имя");
  });

  test("Если ошибка не найдена то сообщение Unknown error", () => {
    expect(errorRepo.translate(999)).toBe("Unknown error");
    expect(errorRepo.translate(0)).toBe("Unknown error");
  });
});
