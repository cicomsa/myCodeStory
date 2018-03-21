var products = [
  { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
]

var shoppingCart = [];
var totalPrice = 0;

setTimeout(function(){

  function creatingTheTotal() {
    referenceNumberQuestion = prompt(`Please insert the reference number of the desired product:`);
    products.forEach(function(ref){
        if (referenceNumberQuestion == ref.referenceNumber) {
          shoppingCart.push(` "${ref.name}"`);
          totalPrice += ref.price;
          return shoppingCart, totalPrice
      }
    })
    anythingElse = prompt(`Would you like anything else? (yes/no)`);
  }

  question = prompt('Would you like to buy anything today? (yes/no)');
  if (question === 'yes') {
    creatingTheTotal()
    while (anythingElse === 'yes') {
      creatingTheTotal()
  }
    document.write(`<h2>Shopping cart: ${shoppingCart}<br>Total price: ${totalPrice} euros</h2>`);
    document.write('<h2>Thank you for visiting our site!</h2>')
  } else {
    document.write(`<h2>Shopping cart: Empty cart<br>Total price: ${totalPrice} euros</h2>`);
    document.write('<h2>Thank you for visiting our site!</h2>')
  }
}, 200);
