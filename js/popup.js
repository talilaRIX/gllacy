"use strict";

(function() {
  var modalTrigger = document.querySelector(".contacts-button");
  var modalWrapper = document.querySelector(".feedback-wrapper");
  var modalClose = modalWrapper.querySelector(".modal-close");

  if (modalTrigger && modalWrapper) {
    modalTrigger.addEventListener("click", function(evt) {
      evt.preventDefault();
      if (modalWrapper.classList.contains("hidden")) {
        document.body.classList.add("page-overlay");
        modalWrapper.classList.remove("hidden");
      }
    });

    modalClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      modalWrapper.classList.add("hidden");
      document.body.classList.remove("page-overlay");
    });
  }

  document.addEventListener("keydown", function(evt) {
    if (
      modalWrapper &&
      evt.key === "Escape" &&
      !modalWrapper.classList.contains(".hidden")
    ) {
      document.body.classList.remove("page-overlay");
      modalWrapper.classList.add("hidden");
    }
  });
})();
