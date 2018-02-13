var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__menu-togler");

navMain.classList.remove("main-nav_nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav__closed")) {
    navMain.classList.remove("main-nav__closed");
    navMain.classList.add("main-nav__opened");
  } else {
    navMain.classList.add("main-nav__closed");
    navMain.classList.remove("main-nav__opened");
  }
});


var modalWindow = document.querySelector(".modal-window");
var orderButton = document.querySelector(".popular-product__order-button");
var cartButtons = document.querySelectorAll(".product-card__cart-button");
var modalAddButton = document.querySelector(".modal-window__add-button");

if (orderButton) {
  orderButton.addEventListener("click", function() {
    if (!modalWindow.classList.contains("modal-window_shown")) {
      modalWindow.classList.add("modal-window_shown");
    }
  });
}

for (var i = 0; i < cartButtons.length; i++) {
  var item = cartButtons[i];
  item.addEventListener("click", function() {
    if (!modalWindow.classList.contains("modal-window_shown")) {
      modalWindow.classList.add("modal-window_shown");
    }
  });
}

modalAddButton.addEventListener("click", function() {
  modalWindow.classList.remove("modal-window_shown");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalWindow.classList.contains("modal-window_shown")) {
      modalWindow.classList.remove("modal-window_shown");
    }
  }
});

window.onclick = function(event) {
  if (event.target == modalWindow) {
    if (modalWindow.classList.contains("modal-window_shown")) {
      modalWindow.classList.remove("modal-window_shown");
    }
  }
}
