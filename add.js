function addToCart(itemName, price, imageUrl) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        name: itemName,
        price: price,
        quantity: 1,
        imageUrl: imageUrl
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';
}