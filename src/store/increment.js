import { makeAutoObservable } from "mobx";

class Store {
  data = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increment() {
    this.data = this.data + 1;
    console.log(this.data);
  }
}

export default new Store();
