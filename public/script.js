let buttonCollapse = document.querySelectorAll(".button__collapse");

buttonCollapse.forEach((button) => {
  button.addEventListener(
    "click",
    (e) => {
      let blockHidden = e.currentTarget.nextSibling.nextElementSibling;
      let arrowChildDown = e.currentTarget.children[0];
      let arrowChildUp = e.currentTarget.children[1];

      blockHidden.classList.toggle("hidden");
      arrowChildUp.classList.toggle("hidden");
      arrowChildDown.classList.toggle("hidden");
    },
    false
  );
});
