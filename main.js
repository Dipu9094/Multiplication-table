let inputValue = document.getElementById('input')
let click = document.getElementById('btn')
let mainLi = document.getElementById('main-list')



click.addEventListener('click', (event) => {

    if (inputValue.value % 1 == 0) {
        while (mainLi.hasChildNodes()) {
            mainLi.removeChild(mainLi.firstElementChild);
        }

        for (let i = 1; i <= 10; i++) {

            let list = document.createElement('li')
            list.style.backgroundColor = 'grey'
            list.innerHTML = `${inputValue.value} X ${i}= ${inputValue.value * i}`
            mainLi.appendChild(list)
        }
        inputValue.value = ''

    }
    else {
        alert('Please enter an integer!!!.')
        inputValue.value = ''
    }

}

)