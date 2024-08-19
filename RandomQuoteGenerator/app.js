const colors = ["green", "red", "rgba(133, 122, 200)", "f15025", "blue", "yellow"]
const quotes = ["1The more we value things outside our control, the less control we have.", 
"You have power over your mind, not outside events. Realize this, and you will find strength.", 
"We suffer more often in imagination than in reality.", 
"Ignorance is the cause of fear.", 
"No man is free who is not master of himself.", 
"Men are disturbed not by things, but by the view which they take of them."]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

//function to change the colors of the background
btn.addEventListener("click", () => {
    //target the body from the HTML
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    document.body.style.backgroundColor = quotes[randomNumber]
    color.textContent = colors[randomNumber]
    color.textContent = quotes[randomNumber]
})

getRandomNumber = () => {
    return Math.floor(Math.random() * quotes.length)
}
