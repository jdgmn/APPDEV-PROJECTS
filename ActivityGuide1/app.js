const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("phonenum").value
    let major = document.getElementById("major").value

    let x = `Hello ${name}, I see that you are from ${address}, and you are pursuing ${major}, and your phone number is ${telephone}`
    document.getElementById("output1").innerHTML = x
})

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    let sales = document.getElementById("sales").value

    let x = sales * 0.23
    document.getElementById("output2").innerHTML = 'Annual Profit: ' + sales + ' * 0.23 = ' + x
})

const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => {

    let dist1 = 60 * 5
    let dist2 = 60 * 8
    let dist3 = 60 * 12
    document.getElementById("output3a").innerHTML = 'In 5 hours, the car will travel ' + dist1 + ' miles.'
    document.getElementById("output3b").innerHTML = 'In 8 hours, the car will travel ' + dist2 + ' miles.'
    document.getElementById("output3c").innerHTML = 'In 12 hours, the car will travel ' + dist3 + ' miles.'
})

const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () => {
    let miles = document.getElementById("miles").value
    let gallon = document.getElementById("gallon").value

    let x = miles / gallon
    document.getElementById("output4").innerHTML = 'MILES PER GALLON: ' + miles + ' / ' + gallon + ' = ' + x
})

const btn5 = document.getElementById("btn5")
btn5.addEventListener("click", () => {
    let cels = document.getElementById("cels").value

    let x = (9/5) * cels + 32
    document.getElementById("output5").innerHTML = 'Fahrenheit: (9/5) * ' + cels + ' + 32 = ' + x
})

const btn6 = document.getElementById("btn6")
btn6.addEventListener("click", () => {
    let cookie = document.getElementById("cookie").value
    let cookieBag = 40
    let servingBag = 10
    let calServing = 300
    let calCookie = (servingBag * calServing) / cookieBag
    document.getElementById("output6").innerHTML = `Total Calories Consumed: `+ cookie * calCookie
})

const btn7 = document.getElementById("btn7")
btn7.addEventListener("click", () => {
    let males = document.getElementById("males").value
    let females = document.getElementById("females").value
    let total = parseInt(males) + parseInt(females)
    document.getElementById("output7a").innerHTML = 'Males: ' + males / total * 100 + '%'
    document.getElementById("output7b").innerHTML = 'Females: ' + females / total * 100 + '%'
})