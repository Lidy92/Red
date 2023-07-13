

$(document).ready(function() {
  $('#carouselExample').carousel({
    interval: 3000 // Change slide every 3 seconds
  })
});


 
  
    // Add to Cart function
    function addToCart(event) {
      const product = event.target.parentNode;
      const productId = product.getAttribute("data-id");
      const productName = product.innerText.split(" ")[0];

      const cartItem = document.createElement("li");
      cartItem.innerHTML = `${productName} <button class="remove-button">Remove</button>`;
      cartItem.setAttribute("data-id", productId);

      document.getElementById("cart-list").appendChild(cartItem);
    }

    // Remove from Cart function
    function removeFromCart(event) {
      const cartItem = event.target.parentNode;
      const cartItemId = cartItem.getAttribute("data-id");

      cartItem.remove();
    }

    // Add event listeners to Add and Remove buttons
    $(document).ready(function() {
      $(".add-button").on("click", addToCart);
      $(document).on("click", ".remove-button", removeFromCart);
    });

