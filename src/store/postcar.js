import { makeAutoObservable } from "mobx";

class PostCar {
  infocar = {
    name: "Volkswagen Passat B7",
    img: "https://www.vaglife.com.ua/wp-content/uploads/2019/09/TB22KHWdB0kpuFjSsppXXcGTXXa_2455288087.jpg",
    price: 14000,
    open: false,
    numberOpens: 0,
    saled: false,
  };
  constructor() {
    makeAutoObservable(this);
  }

  openPost() {
    this.infocar.open = !this.infocar.open;
    console.log(this.infocar.open);
    this.infocar.numberOpens = this.infocar.numberOpens + 1;
    if (this.infocar.numberOpens % 4 == 0) {
      this.infocar.price = this.infocar.price - 100;
    }
  }

  buyCar() {
    this.infocar.saled = !this.infocar.saled;
    console.log(this.infocar.saled);
  }
}

export default new PostCar();
