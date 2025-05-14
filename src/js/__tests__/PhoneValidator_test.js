import PhoneValidator from "../PhoneValidator";

describe("PhoneValidator", () => {
  test("Проверяем со случаем +7", () => {
    const phone = new PhoneValidator("+7 960 000 00 00");
    const result = "+79600000000";
    expect(phone.cleanPhoneNumber()).toBe(result);
  });

  test("Проверяем со случаем 7", () => {
    const phone = new PhoneValidator("7 960 000 00 00");
    const result = "+79600000000";
    expect(phone.cleanPhoneNumber()).toBe(result);
  });

  test("Проверяем со случаем 8", () => {
    const phone = new PhoneValidator("8 (927) 000-00-00");
    const result = "+79270000000";
    expect(phone.cleanPhoneNumber()).toBe(result);
  });

  test("Проверяем когда другая страна", () => {
    const phone = new PhoneValidator("+86 000 000 0000");
    const result = "+860000000000";
    expect(phone.cleanPhoneNumber()).toBe(result);
  });

  test("Проверяем, когда другой тип данных", () => {
    expect(() => new PhoneValidator(true)).toThrow(
      "Ожидаемый тип данных String",
    );
  });

  test("Регион слишком длинный", () => {
    const phone = new PhoneValidator("+8600 000 000 0000");
    expect(() => phone.cleanPhoneNumber()).toThrow(
      "Неверный формат номера телефона",
    );
  });

  test("Сам номер больше 10 цифр", () => {
    const phone = new PhoneValidator("+86 000 000 0000 00");
    expect(() => phone.cleanPhoneNumber()).toThrow(
      "Неверный формат номера телефона",
    );
  });
});
