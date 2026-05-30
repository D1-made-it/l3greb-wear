let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} DA`;
    list.appendChild(li);
  });

  document.getElementById("total").textContent =
    "Total: " + total + " DA";
}

function submitOrder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (!name || !phone || !address) {
    alert("Please fill all fields");
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let order = {
    name,
    phone,
    address,
    items: cart,
    total
  };

  console.log("ORDER:", order);

  alert("Order ready (next step: Google Sheets automation)");
}
