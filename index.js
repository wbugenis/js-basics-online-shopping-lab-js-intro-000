var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push(itemName: item, itemPrice: math.floor(math.random()*100)
 return (`${item} has been added to cart.`);
}

function viewCart() {
  var i = 0, str = "In your cart, you have ";
  if (cart.length === 0) { 
    return "Your shopping cart is empty.";
  } else {
    while(i < cart.length) {
      str += `${cart.itemName[i]} at $${cart.itemPrice[i]}`;
      if(i === cart.length - 1) {
        str += ".";
      } else if(i < cart.length - 1) {
        str += ", ";
      }
      i+= 1;
    }
    return str;
}

function total() {
  var i = 0, sum = 0;
  while (i < cart.length){
    sum += cart.itemPrice[i];
    i+= 1;
  }
  return sum;
}

function removeFromCart(item) {
  while( i < cart.length) {
    if(cart.itemName === item){
      cart.splice(i, 1)
      break;
    }
    i+= 1;
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
