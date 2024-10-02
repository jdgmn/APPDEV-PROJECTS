import React, {useState} from "react"

const quoteList = [
    "The more we value things outside our control, the less control we have.",
    "You have power over your mind, not outside events. Realize this, and you will find strength.",
    "We suffer more often in imagination than in reality.",
    "Ignorance is the cause of fear.",
    "No man is free who is not master of himself.",
    "Men are disturbed not by things, but by the view which they take of them."
]

export default function QuoteGenerator() {

    const[quoteNum, setNum] = useState(0)
    let randNum

    function increase() {
        if (quoteNum > quoteList.length - 2) {
            setNum(q => q - quoteList.length)
        }
        setNum(q => q + 1)
    }

    function decrease() {
        if (quoteNum < 1) {
            setNum(q => q + quoteList.length)
        }
        setNum(q => q - 1)
    }

    function random() {
        let x
        do {
            x = Math.floor(Math.random() * (quoteList.length - 1))
        } while (x == randNum)
        randNum = x
        setNum(q => q + x - q)
    }

    return(
        <>
        <div className="container">
            <p className="quote-container">
                Quote: <br/>
                {quoteList[quoteNum]}
            </p>
            &nbsp;
            <button className="button-container-prev" onClick={decrease}>Previous</button>
            <button className="button-container-rand" onClick={random}>Reset</button>
            <button className="button-container-next" onClick={increase}>Next</button>
        </div>
        </>
    )
}