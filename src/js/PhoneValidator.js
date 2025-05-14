// PhoneValidator.js

export default class PhoneValidator {
  constructor(phone) {
    if (typeof phone !== "string") {
      throw new Error("Ожидаемый тип данных String");
    }
    this.phone = phone;
  }

  cleanPhoneNumber() {
    // Удаляем все кроме знака плюс и цифр
    const clearPhone = this.phone.replace(/[^\d+]/g, "");

    // Проверяем формат: начинается с + или 7/8 для России, или другой код
    const match = clearPhone.match(/^(\+?\d{1,3})(\d{10})$/);
    // console.log(match);
    if (!match) {
      throw new Error("Неверный формат номера телефона");
    }

    const [, countryCode, numberPhone] = match;
    let code = countryCode;
    // console.log(countryCode, numberPhone);
    if (countryCode === "+7" || countryCode === "8") {
      code = "+7";
    }

    if (!code.startsWith("+")) {
      code = "+" + code;
    }

    return code + numberPhone;
  }
}

// const phone = new PhoneValidator("+86 000 000 0000");
// console.log(phone.cleanPhoneNumber());
