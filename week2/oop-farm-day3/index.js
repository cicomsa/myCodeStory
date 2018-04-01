const {Wheat, Sugarcane} = require('./crops')
const { Cow, Pig, Horse} = require('./animals')

class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
    this.animals = []
  }

  addCrop(crop) {
    this.crops.push(crop)
  }

  addAnimal(animal) {
    this.animals.push(animal)
  }

  calculateIncome() {

      const cRoP =  this.crops
        .map(crop => crop.getYieldInEuros())
        .reduce((a, b) => a + b, 0) // 0 as default if there is no value in the array)


      const aNiMaL = this.animals
          .map(animal => animal.getValueInEuros())
          .reduce((a, b) => a + b, 0)

      return cRoP + aNiMaL
    }

  getReport() {
    console.log("------------------")
    console.log(`- Farm: ${Farm.name} -`)
    console.log( `- No. of crops: ${this.crop} -`)
    console.log(`- No. of animals: ${this.animals} -`);
    console.log(`- Total income: ${this.calculateIncome()} -`);
    console.log("------------------")

  }
  }


  module.exports.Farm = Farm
