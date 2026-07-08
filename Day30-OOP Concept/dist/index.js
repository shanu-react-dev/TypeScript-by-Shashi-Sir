"use strict";
// class Chai {
//   flavour: string;
//   price: number;
Object.defineProperty(exports, "__esModule", { value: true });
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
    shopName = "Chai Corner";
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
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too Sweet");
        this._sugar = value;
    }
}
const c = new ModernChai();
c.sugar = 3;
class EkChai {
    flavour;
    static ShopName = "ChaiCode Cafe";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.ShopName);
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("Brewing chai");
    }
}
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
//# sourceMappingURL=index.js.map