// Function to open the purchase form modal
function openForm(productName) {
  var modal = document.getElementById("form-modal");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var addressInput = document.getElementById("address");
  var quantityInput = document.getElementById("quantity");
  var priceInput = document.getElementById("price");

  // Set initial values in the form
  nameInput.value = "";
  emailInput.value = "";
  addressInput.value = "";
  quantityInput.value = "0";
  priceInput.value = getProductPrice(productName);

  // Update the price when the quantity changes
  quantityInput.addEventListener("change", function() {
    var quantity = parseInt(quantityInput.value);
    if (quantity < 0) {
      quantityInput.value = "0";
      quantity = 0;
    }
    var price = parseInt(getProductPrice(productName).replace("$", ""));
    priceInput.value = "$" + (quantity * price);
  });

  modal.style.display = "block";
}

// Function to close the purchase form modal
function closeFormModal() {
  var modal = document.getElementById("form-modal");
  modal.style.display = "none";
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var addressInput = document.getElementById("address");
  var quantityInput = document.getElementById("quantity");
  var priceInput = document.getElementById("price");

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var address = addressInput.value.trim();
  var quantity = parseInt(quantityInput.value);
  var price = priceInput.value;

  // Validate the form data
  if (name === "" || email === "" || address === "" || quantity <= 0) {
    alert("Please fill in all the required fields and enter a valid quantity.");
    return;
  }

  // Clear the form inputs
  nameInput.value = "";
  emailInput.value = "";
  addressInput.value = "";
  quantityInput.value = "0";
  priceInput.value = "";

  // Close the modal
  closeFormModal();

  // Display a success message or perform any other desired action
  var successMessage = "Thank you for your purchase!\n\n";
  successMessage += "Name: " + name + "\n";
  successMessage += "Email: " + email + "\n";
  successMessage += "Address: " + address + "\n";
  successMessage += "Quantity: " + quantity + "\n";
  successMessage += "Price: " + price;

  alert(successMessage);
}

// Function to retrieve the price based on the selected product
function getProductPrice(productName) {
  if (productName === "Product 1") {
    return "$15000";
  } else if (productName === "Product 2") {
    return "$17000";
  } else if (productName === "Product 3") {
    return "$25000";
  }
   else if (productName === "Product 4") {
  return "$20000";
  }
  else if (productName === "Product 5") {
    return "$16000";
    }
  else if (productName === "Product 6") {
    return "$22000";
    }
  else if (productName === "Product 7") {
    return "$29000";
    }
  else if (productName === "Product 8") {
    return "$30000";
    }
  else if (productName === "Product 9") {
    return "$40000";
    }

  return "$0";
}

// Attach event listener to the form submit event
var orderForm = document.getElementById("order-form");
orderForm.addEventListener("submit", handleFormSubmit);



//ADD TO CART
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
    itemPriceElement.classList.add("cart-item-price"); // Add a CSS class for styling

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
  if (cartItems.length === 0) {
    alert("Your cart is empty. Please add items to the cart before checking out.");
    return;
  }

  cartCount = 0;
  cartItems = [];
  totalQuantity = 0;
  totalAmount = 0;

  updateCartCount();
  updateCartItems();

  alert("Checkout completed. Thank you for your purchase!");
}


//Submitform
// Submit form function
function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  // Perform form validation here
  if (!name || !email || !address) {
    alert("Please fill out all required fields.");
    return;
  }

  // Proceed with checkout if the form is valid
  if (cartItems.length > 0) {
    // Place your checkout logic here
    // ...

    // Reset form values
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";

    // Close the cart modal
    closeCart();

    // Show success message
    showSuccessMessage();
  } else {
    alert("Please add items to the cart.");
  }
}

// Show success message
function showSuccessMessage() {
  const successMessage = document.createElement("p");
  successMessage.textContent = "Thank you for your purchase!";

  const cartTotalElement = document.getElementById("cart-total");
  cartTotalElement.appendChild(successMessage);
}




