class Car {
  constructor(name, model, company, color) {
    this.name = name;
    this.model = model;
    this.company = company;
    this.color = color;
    this.gas = 30;
    this.isStarted = false;
    this.isMoving = false;
    this.isStoped = true;
  }

  stop() {
    if (!this.isStoped) {
      this.isStarted = false;
      this.isMoving = false;
      this.isStoped = true;
      console.log("Moshina o'chdi");
    }
  }

  refiil() {
    this.gas += 10;
  }

  move() {
    if (!this.isStarted && this.isStoped)
      return console.log("Oldin zavat qilish kerak");
    else if (this.isStarted && this.gas > 0 && !this.isStoped) {
      console.log("Harakatlandi");
      setInterval(() => {
        if (this.gas > 0 && !this.isStoped) {
          this.gas -= 1;
          console.log(`${this.gas}ta gaz qoldi`);
        }
        if (this.gas === 5 && !this.isStoped) {
          console.log("Gaz kam qoldiiii!!!!!!");
        }
        if (this.gas === 1 && !this.isStoped) {
          console.log("Harakat to'xtatildi");
        }
      }, 1000);
    }
  }
  startEnging() {
    this.isStoped = false;
    if (this.isStarted && !this.isStoped) {
      console.log("Zavat bo'lib turiptikuuu");
    }
    if (!this.isStarted && !this.isStoped) {
      console.log("Zavat bo'ldi, Haydashingiz mumkin!");
      this.isStarted = true;
    }
  }
}

let Mercedes = new Car("AMG", "GT63", "Mercedes", "white");
let BMW = new Car("M8", "Compation", "BMW", "Black");