const {Farm, animalsAndCrops} = require('./index')
const {Wheat, Sugarcane} = require('./crops')
const {Cow, Pig, Horse} = require('./animals')


test ('Total income various animals and crops', () => {
  const farm = new Farm()
  farm.addAnimal( new Cow(10), new Horse(10), new Pig(1))
  farm.addCrop( new Wheat(10), new Sugarcane(1))
  expect(farm.calculateIncome()).not.toBe(0)
})
