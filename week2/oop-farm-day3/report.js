const {Farm, animalsAndCrops} = require('./index')
const {Wheat, Sugarcane} = require('./crops')
const {Cow, Pig, Horse} = require('./animals')

const myFarm = new Farm("FARM")
console.log(`Farm: ${myFarm.name}`)
