function buyNow() {
    const size = document.getElementById('size').value;
    const message = document.getElementById('message');

    if (size === "") {
        message.textContent = "Please select a size before purchasing.";
        message.style.color = "red";
    } else {
        message.textContent = `Thank you! You selected size ${size}. I will contact you shortly at +243817484958 or saskiamambigarcia@gmail.com to complete your order.`;
        message.style.color = "green";
    }
}