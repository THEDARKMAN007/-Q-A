const buttons = document.getElementsByTagName("button")
const text = document.getElementsByClassName("q-text");
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      
    console.log("to minus");

    if (e.target.classList.includes(".fa-square-plus")) {
        button.innerHTML = `<i class="fa-regular fa-square-minus">`;
        text.innerHTML = `
                <p>
                <hr/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                hic, libero magnam cupiditate ad quaerat, ab vel incidunt
                doloremque quia, cum voluptatum adipisci nam ut accusantium
                placeat veniam? Dicta, aliquid.
                </p>
                `;
    console.log("to minus");
        
    } else if (e.target.classList.includes(".fa-square-minus")) {
        button.innerHTML = `
                <i class="fa-regular fa-square-plus"></i>`;
        console.log("to plus");
    }
  });
});
