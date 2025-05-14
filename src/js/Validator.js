// Validator.js
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if (typeof this.name !== "string") {
      throw new Error("Имя должно быть строковым типом данных");
    }
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error("Имя должно содержать от 2 до 10 символов");
    }
    const regex = /^[a-zA-Z][a-zA-Z\-_0-9]*[a-zA-Z]$/;
    if (!regex.test(this.name)) {
      throw new Error(
        "Допустимы только латинские буквы, символы тире -," +
          "подчёркивания _ и цифры (0-9), а также не должно начинаться и" +
          "заканчиваться цифрами, символами подчёркивания или тире",
      );
    }

    const reThreeDigitalMax = /\d{4}/;
    if (reThreeDigitalMax.test(this.name)) {
      throw new Error("Имя не должно содержать подряд более трёх цифр");
    }
    return true;
  }
}
