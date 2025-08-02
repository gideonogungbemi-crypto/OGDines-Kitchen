// ========== Order Tracking Logic ==========
function trackOrder() {
  const input = document.getElementById('orderInput').value.trim();
  const resultText = document.getElementById('resultText');

  if (input === "") {
    resultText.textContent = "Please enter your Order ID or phone number.";
    resultText.style.color = "red";
    return;
  }

  // Dummy lookup example
  if (input === "12345" || input === "08157247237") {
    resultText.textContent = "✅ Your order is being prepared. Estimated delivery: 25 mins.";
    resultText.style.color = "green";
  } else {
    resultText.textContent = "❌ Order not found. Please try again or contact support.";
    resultText.style.color = "red";
  }
}

// ========== Place Order via WhatsApp ==========
function submitOrder(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const menu = document.getElementById('menu').value;
  const quantity = document.getElementById('quantity').value;

  if (!name || !phone || !address || !menu || !quantity) {
    alert("❌ Please fill in all fields.");
    return;
  }

  const message = `Hello OGDines Kitchen! 🍽️%0A%0AI'd like to place an order:%0A%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A🏠 Address: ${address}%0A📝 Order: ${menu}%0A🔢 Quantity: ${quantity}%0A%0AThank you!`;

  const whatsappNumber = '2348157247237';
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
