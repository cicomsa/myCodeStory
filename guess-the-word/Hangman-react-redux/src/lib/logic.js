const apiSites = ["https:\/\/dog.ceo\/api\/img\/wolfhound-irish\/n02090721_2361.jpg",
"https:\/\/s3-eu-west-1.amazonaws.com\/dog-ceo-stanford-files\/spaniel-cocker\/n02099601_5240.jpg",
"https:\/\/s3-eu-west-1.amazonaws.com\/dog-ceo-stanford-files\/retriever-golden\/n02102318_10087.jpg"]


//match by whole link + counting number of likes
const mySites = ["https:\/\/s3-eu-west-1.amazonaws.com\/dog-ceo-stanford-files\/spaniel-cocker\/n02102318_12717.jpg",
"https:\/\/dog.ceo\/api\/img\/wolfhound-irish\/n02090721_2361.jpg",
"https:\/\/s3-eu-west-1.amazonaws.com\/dog-ceo-stanford-files\/terrier-lakeland\/n02095570_5316.jpg"]
let myArray = []

function pushArray(n) {
  if (mySites.indexOf(n) != -1)
  {return myArray.push(n)}
}
let match = apiSites.filter(n => pushArray(n))
console.log(match)
console.log(match.length)

//match by breed + counting number of likes
const dogBreed = ['spaniel-cocker']
let myArray1 = []

let match1 = apiSites.filter(n => n.includes(dogBreed))
console.log(match1)
console.log(match1.length)
