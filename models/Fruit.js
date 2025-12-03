const fruits = require("../fruity.json")

class Fruit {
    constructor({genus, name, id, family, order, nutritions}) {
        this.genus = genus
        this.name = name
        this.id = id
        this.family = family
        this.order = order
        this.nutritions = nutritions
    }

    static showAll = () => {
        return fruits.map(fruit => new Fruit(fruit))

    }
    static showOne = (name) => {
        const fruit = fruits.filter(fruit => fruit.name.toLowerCase() == name)
        if (fruit.length == 1) {
            return new Fruit(fruit[0])
        } else {
            throw Error("The fruit does not exist")

        }
    }
    static create = (data) => {
    const newFruit = data
    const updatedFruit = fruits.find((fruit) => fruit.name.toLowerCase() == newFruit.name.toLowerCase())
    if (!updatedFruit) {
      newFruit["id"] = fruits.length + 1
      fruits.push(newFruit)
      return new Fruit(newFruit)
    } else {
        throw Error("Fruit already exists")
    }
  }

    update(data) {
        const updatedFruit = fruits.find((fruit) => fruit.name.toLowerCase() == this.name.toLowerCase())
        console.log(updatedFruit);
        if(updatedFruit){
            updatedFruit.name = data.name
            return new Fruit(updatedFruit)
        } else {
            throw new Error ("Fruit not found")
        }
    }
    destroy() {
        const deletedFruit = fruits.find((fruit) => fruit.name.toLowerCase() == this.name.toLowerCase())
        if(deletedFruit){
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index,1)
        } else {
            throw new Error ("Fruit not found")
        }
    }

}

module.exports = Fruit