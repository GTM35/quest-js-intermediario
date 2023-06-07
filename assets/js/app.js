const inputs = document.querySelectorAll(".container-input input");
const textarea = document.querySelector(".container-textarea textarea");
const btn = document.getElementById("button");

btn.addEventListener("click", (e) => {
  e.preventDefault;

  inputs.forEach((item) => {
    validateValue(item);
  });

  validateValue(textarea);
});

function validateValue(item) {
  if (item.value == "") {
    item.classList.remove("success");

    item.classList.add("error");
    item.nextElementSibling.classList.add("active");
  } else {
    item.classList.remove("error");
    item.nextElementSibling.classList.remove("active");

    item.classList.add("success");
  }
}
