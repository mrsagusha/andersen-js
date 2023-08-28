class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  #isNumber(num) {
    return typeof num === 'number' && isFinite(num) && !isNaN(num);
  }

  #validateString(value, minLength, maxLength) {
    if (typeof value !== 'string') {
      throw new Error('Должна передаваться строка');
    }

    if (value.length < minLength || value.length > maxLength) {
      throw new Error('Неверная длина строка');
    }
  }

  #validateNumber(value, minAmount, maxAmount) {
    if (typeof value !== 'number' || (!isFinite(value) && isNaN(value))) {
      throw new Error('Должно передаваться число');
    }

    if (minAmount && maxAmount) {
      if (value < minAmount || value > maxAmount) {
        throw new Error('Неверное число');
      }
    }
  }

  get brand() {
    return this.#brand;
  }

  set brand(brand) {
    this.#validateString(brand, 1, 50);
    this.#brand = brand;
  }

  get model() {
    return this.#model;
  }

  set model(model) {
    this.#validateString(model, 1, 50);
    this.#model = model;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(year) {
    this.#validateNumber(year, 1900, new Date().getFullYear());
    this.#yearOfManufacturing = year;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(speed) {
    this.#validateNumber(speed, 100, 300);
    this.#maxSpeed = speed;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(volume) {
    this.#validateNumber(volume, 5, 20);
    this.#maxFuelVolume = volume;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(liter) {
    this.#validateNumber(liter);
    this.#fuelConsumption = liter;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина еще не заведена');
    }

    this.#isStarted = false;
  }

  fillUpGasTank(fuelLiters) {
    if (!this.#isNumber(fuelLiters) || fuelLiters <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    }

    if (this.#currentFuelVolume + fuelLiters > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }

    this.#currentFuelVolume += fuelLiters;
  }

  drive(speed, time) {
    const distance = speed * time;
    const requiredFuel = (distance / 100) * this.#fuelConsumption;

    if (!this.#isNumber(speed) || speed <= 0) {
      throw new Error('Неверная скорость');
    }

    if (!this.#isNumber(time) || time <= 0) {
      throw new Error('Неверное количество часов');
    }

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }

    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }

    if (requiredFuel > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    }

    this.#currentFuelVolume -= requiredFuel;
    this.#mileage += distance;
  }
}

module.exports = { Car };
