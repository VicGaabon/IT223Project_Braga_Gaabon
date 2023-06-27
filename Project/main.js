//Checkout
function openForm(productName) {
    // Create a form dynamically
    var form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', 'process-order.php'); // Replace 'process-order.php' with your own form processing script
  
    // Create input fields
    var productNameInput = document.createElement('input');
    productNameInput.setAttribute('type', 'hidden');
    productNameInput.setAttribute('name', 'product');
    productNameInput.setAttribute('value', productName);
  
    var nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', 'Your Name');
  
    var emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'Your Email');
  
    var submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
  
    // Append input fields to the form
    form.appendChild(productNameInput);
    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(submitButton);
  
    // Append the form to the body
    document.body.appendChild(form);
  
    // Submit the form
    form.submit();
  }
  

//Show
//ADD TO CART
// Global variables
let cartCount = 0;
let cartItems = [];
let totalQuantity = 0;
let totalAmount = 0;

// Open cart function
function openCart() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = "block";
}

// Close cart function
function closeCart() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = "none";
}

// Add to cart function
function addToCart(productName, price) {
  cartCount++;
  updateCartCount();

  const item = { name: productName, price: price };
  cartItems.push(item);

  updateCartItems();

  alert(`Added ${productName} to the cart!`);
}

// Update cart count
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = cartCount;
}

// Update cart items
function updateCartItems() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");

    const itemNameElement = document.createElement("span");
    itemNameElement.textContent = item.name;

    const itemPriceElement = document.createElement("span");
    itemPriceElement.textContent = "$" + item.price;

    cartItemElement.appendChild(itemNameElement);
    cartItemElement.appendChild(itemPriceElement);

    cartItemsElement.appendChild(cartItemElement);
  });

  updateCartTotal();
}

// Update cart total
function updateCartTotal() {
  const cartQuantityElement = document.getElementById("cart-quantity");
  cartQuantityElement.textContent = cartItems.length;

  totalQuantity = cartItems.length;

  const cartAmountElement = document.getElementById("cart-amount");

  totalAmount = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
  cartAmountElement.textContent = totalAmount.toFixed(2);
}

// Checkout function
function checkout() {
  // Replace this example code with your actual checkout functionality

  // Reset cart
  cartCount = 0;
  cartItems = [];
  totalQuantity = 0;
  totalAmount = 0;

  updateCartCount();
  updateCartItems();

  alert("Checkout completed. Thank you for your purchase!");
}

