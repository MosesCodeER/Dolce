
let cart = [];

function addToCart(productName, productPrice) {
    const quantity = parseInt(document.getElementById('quantity').value);
    const product = { name: productName, price: productPrice, quantity: quantity };
    cart.push(product);
    alert(`${productName} added to cart!`);
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<p>${item.name} - $${item.price} x ${item.quantity}</p>`;
        total += item.price * item.quantity;
    });

    let cartSummaryDiv = document.getElementById('cart-summary');
    cartSummaryDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    alert("Proceed to checkout page here!");
}