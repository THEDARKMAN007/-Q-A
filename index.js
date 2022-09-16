const buttons = document.querySelectorAll("button");
const grids = document.querySelectorAll('.div')
const element = document.createElement("div");
const icons = document.querySelectorAll(".fa-regular")
element.innerHTML = `
              <p class='q-text'>
                <hr />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                hic, libero magnam cupiditate ad quaerat, ab vel incidunt
                doloremque quia, cum voluptatum adipisci nam ut accusantium
                placeat veniam? Dicta, aliquid.
              </p>
            `;


for (let i = 0; i < 3; i++){
  buttons[i].addEventListener(
    'click', function (e) {
      if (e.target.classList.contains("fa-square-plus")) {
        buttons[i].innerHTML = `<i class="fa-regular fa-square-minus">`;
        grids[i].appendChild(element);

      } else if (e.target.classList.contains("fa-square-minus")) {
        buttons[i].innerHTML = `<i class="fa-regular fa-square-plus"></i>`;
        grids[i].removeChild(element);
      }
    }
  )
}

