//set initial value for our count variable
let count = 30
//select the value buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
//console.log(btns)

btns.forEach((btn) => {
    //console.log(btn)
    btn.addEventListener('click', (e) => {
        //console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if (styles.contains('timer')){
            timer = setInterval(function(){
                count--
                value.textContent = count
                if (count == 10) {
                    value.style.color = "red"
                }
                if (count == 0) {
                    clearInterval(timer)
                    value.style.color = "black"
                }
            }, 150)
        }
        else { 
            count = 30
        }

        //style feedback for my count variable
        if (count > 0){
            value.style.color = "green"
        }
        if (count < 0){
            value.style.color = "red"
        }
        if (count == 0) {
            value.style.color = "black"
        }

        value.textContent = count
    })
})