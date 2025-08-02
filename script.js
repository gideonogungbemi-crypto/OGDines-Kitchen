// ======= ORDER TRACKING FUNCTION =======
function trackOrder() {
  const input = document.getElementById('orderInput').value.trim();
  const resultText = document.getElementById('resultText');

  if (input === "") {
    resultText.textContent = "⚠️ Please enter your Order ID or phone number.";
    resultText.style.color = "crimson";
    return;
  }

  // Simulated lookup
  if (input === "12345" || input === "08157247237") {
    resultText.textContent = "✅ Your order is being prepared! Estimated delivery: 25 mins.";
    resultText.style.color = "green";
  } else {
    resultText.textContent = "❌ Order not found. Please try again or contact us via WhatsApp.";
    resultText.style.color = "crimson";
  }
}

// ======= WHATSAPP ORDER SUBMISSION =======
function submitOrder(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const menu = document.getElementById('menu').value;
  const quantity = document.getElementById('quantity').value;

  if (!name || !phone || !address || !menu || !quantity) {
    alert("⚠️ Please complete all fields before submitting your order.");
    return;
  }

  const message = `👋 Hello OGDines Kitchen! I’d like to place an order:
👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}
🍽️ Order: ${menu}
🔢 Quantity: ${quantity}
🙏 Thank you!`;

  const whatsappNumber = "2348157247237";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}
