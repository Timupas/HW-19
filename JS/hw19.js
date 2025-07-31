//1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

 const inputEl = document.querySelectorAll('[name="color"]')
const inputCheck = document.querySelector('[name="color"]:checked')
console.log(inputCheck);


inputEl.forEach((input) => {
    // console.log(input);
    input.addEventListener("change", onRadioClick)
})


function onRadioClick(event) {
    const color = event.target.value
    document.body.style.backgroundColor = color;
}

if(inputCheck) {
    document.body.style.backgroundColor = inputCheck.value;
}

//2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange)

function onInputChange (event) {
spanRef.textContent.event.target.value
}

//3(2)

const validationInp = document.querySelector('#validation-input')
console.log(validationInp);

validationInp.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    const requiredValue = Number(event.target.dataset.length)
    const currentValue = event.target.value.length

    validationInp.classList.remove('valid','invalid')

    if(currentValue === requiredValue) {
        validationInp.classList.add('valid')
    } else {
        validationInp.classList.add('invalid')
    }
}


//3.Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const inpControl = document.querySelector('#font-size-control')

const spanText = document.querySelector('#text')

inpControl.addEventListener('input', onInputControl)

function onInputControl(event) {
    // console.log(event.target.value);
    
    const size = event.target.value + "px"
    console.log(size);
    spanText.style.fontSize = size;
}
