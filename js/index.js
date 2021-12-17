const display = document.querySelector(".calculator__display input");
const result = document.querySelector(".calculator__display h2");
const btns = document.querySelectorAll(".calculator__btn-box span");
const openBtn = document.querySelector('.toleft--icon');
const colorBox = document.querySelector(".colors");
const colors = document.querySelectorAll(".color--item")
const calculator = document.querySelector(".calculator");

openBtn.addEventListener("click", () => {
    colorBox.classList.toggle("active");
})

colors.forEach((color, index) => {
    btns.forEach(btn => {
        color.addEventListener('click', () => {
            calculator.style.backgroundColor = color.getAttribute("data-bg-color");
            btn.style.boxShadow = `0px 11px 16px 0px ${color.getAttribute("data-shadow")}`
        })
    })
})
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent == "=") {
            try {
                let sum = eval(display.value)
                if (String(sum).includes(".")) {
                    console.log("round");
                    sum = String(sum).slice(0, String(sum).indexOf(".") + 3)
                }
                display.value = sum;
            } catch (e) {
                display.value = "Xatolik !"
                setTimeout(() => {
                    display.value = ""
                }, 1000)
            }
        } else if (btn.textContent == "C") {
            display.value = display.value.slice(0, display.value.length - 1)
        } else if (btn.textContent == "AC") {
            display.value = ""
        } else {
            display.value += btn.textContent;
        }
    });
})