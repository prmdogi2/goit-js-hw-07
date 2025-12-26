function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

create.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});
destroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
}
function createBoxes(amount) {
  let size = 30;
  if (amount > 99) {
  } else {
    for (let i = 0; i < amount; i++) {
      const newDiv = document.createElement("div");

      newDiv.style.width = size + "px";
      newDiv.style.height = size + "px";

      newDiv.style.backgroundColor = getRandomHexColor();

      newDiv.style.margin = "5px";

      boxes.appendChild(newDiv);

      size += 10;
    }
  }
}
