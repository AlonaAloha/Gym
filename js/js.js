const wrapper = document.querySelector(".wrapper");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

document.addEventListener("DOMContentLoaded", function () {
  const joinForm = document.querySelector(".form-box.login form");

  joinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(joinForm);
    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    const name = data["name"];

    const storedData = JSON.parse(localStorage.getItem("formData")) || [];

    storedData.push(data);

    localStorage.setItem("formData", JSON.stringify(storedData));

    joinForm.reset();

    wrapper.innerHTML = `
<div class="wrapper-alert">
   <h3>${name} </h3>
   <p>thanks, our staff will contact you</p>
</div>
`;
    setTimeout(() => {
      wrapper.remove();
    }, 3000);
  });
});
const telInput = document.querySelector('input[name="tel"]');

telInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

const ageInput = document.querySelector('input[name="calendar"]');

ageInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});
const emailInput = document.querySelector('input[name="mail"]');

emailInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^@]*@com\.ua/g, "");
});
const cardInput = document.querySelector('input[name="id-card"]');

cardInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});
function setBackground() {
  let wrapper = document.querySelector(".wrapper");
  if (window.innerWidth <= 768) {
    wrapper.style.background = "black";
  }
}
setBackground();
