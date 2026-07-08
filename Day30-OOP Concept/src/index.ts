// class Chai {
//   flavour: string;
//   price: number;

//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;
//   }
// }

// const masalachai = new Chai("ginger", 20);
// masalachai.flavour = "masala";

// class Chai {
//   public flavour: string = "Masala Chai";

//   private secretIngredients = "Cardamom";

//   reveal() {
//     return this.secretIngredients;
//   }

//   protected shopName = "Chai Corner";
// }

// const c = new Chai();
// c.reveal();

class Shop {
  protected shopName = "Chai Corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

// new Branch().getName();

class Wallet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();

class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar = 2;
  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too Sweet");
    this._sugar = value;
  }
}

const c = new ModernChai();
c.sugar = 3;

class EkChai {
  static ShopName = "ChaiCode Cafe";

  constructor(public flavour: string) {}
}

console.log(EkChai.ShopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log("Brewing chai");
  }
}

class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
