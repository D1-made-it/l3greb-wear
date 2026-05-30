let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  renderCart();
}

function renderCart() {
  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - " + item.price + " DA";
    list.appendChild(li);
  });

  document.getElementById("total").textContent = "Total: " + total + " DA";
}

function submitOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  if (!name || !phone || !address) {
    alert("Fill all fields");
    return;
  }

  alert("Order placed! (Next step we connect Google Sheets automation)");
