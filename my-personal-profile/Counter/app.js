//set initial value for our count variable
let count = 0
//select the value buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
//console.log(btns)

btns.forEach((btn) => {
    //console.log(btn)
    btn.addEventListener('click', (e) => {
        //console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')){
            count--
            //decreases by 1
        }
        else if (styles.contains('increase')){
            count++
            //increases by 1
        }
        else if (styles.contains('decrease5')){
            count -= 5
        }
        else if (styles.contains('increase5')){
            count += 5
        }
        else if (styles.contains('random')){
            count = Math.floor(Math.random() * 1998) - 999
        }
        else if (styles.contains('timer')){
            count = 30
            timer = setInterval(function(){
                count--
                value.textContent = count
                if (count == 0) {
                    clearInterval(timer)
                }
            }, 1000)
        }
        else { 
            count = 0
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