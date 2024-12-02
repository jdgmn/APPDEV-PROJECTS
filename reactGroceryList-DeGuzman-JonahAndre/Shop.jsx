import React, {useState} from "react"

export default function Shop(props) {
    let ShopItems = props.items

    // these are arrays of objects being passed to ShopItems\
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState([0])
    const [userPayment, setUserPayment] = useState([0])
    const [processed, setProcessed] = useState([0])

    function AddItem(item) {
        setCart(c => [...c, item])
        setTotalPrice(parseFloat(totalPrice) + parseFloat(item.price))
    }

    // function to render items
    const RenderItems = () => {
        return (
            ShopItems.map((item) => {
                return (
                    <>
                    <ul>
                        <li key = {item.id}>{item.name}</li>
                        <p>Price per piece: ${item.price}</p>
                        <button onClick = {() => AddItem(item)}>Add to Cart!</button>
                    </ul>
                    </>
                )
            })
        )
    }

    // function to render items for the cart
    const renderCart = () => {
        return(
            cart.map((item) => {
                return(
                    <>
                    <li key = {item.id}>{item.name}</li>
                    <p>Price per piece: $ {item.price}</p>
                    <br />
                    </>
                )
            })
        )
    }

    // process payment updates the userPayment constant with the user input and sets processed status to 1
    const processPayment = () => {
        const input = document.getElementById("enterPayment").value;
        setUserPayment(parseFloat(userPayment) + parseFloat(input))
        setProcessed(1)
    }

    // function for rendering the receipt
    const renderPayment = () => {
        return(
            <>
            <h4>Paid Amount: ${userPayment}</h4>
            <h4>Change: ${parseFloat(userPayment) - parseFloat(totalPrice)}</h4>
            <p>Thank you for shopping at De Guzman Grocery!</p>
            <br />
            <button type="button" onClick={submitAgain}>Oops! Wrong Amount</button>
            </>
        )
    }
    
    // function for rendering the submit button if user has not paid yet
    const renderSubmit = () => {
        return(
            <h4>Enter Amount:
            <input type="text" name="enterPayment" id="enterPayment" />
            <button type="button" onClick={processPayment}>Submit</button>
        </h4>
        )
    }

    // implemented a redo button that resets the processed status and clears the user payment
    const submitAgain = () => {
        setUserPayment(0)
        setProcessed(0)
    }

    return(
        <>
        <h4>This is the shop: </h4>
        <ul>{RenderItems()}</ul>
        <hr />
        {processed > 0? (<h4>RECEIPT</h4>) :
        (<h4>CHECKOUT</h4>)}
        <h3>Total Price: ${totalPrice}</h3>
        {cart.length > 0 ? (<ul>{renderCart()}</ul>) : 
        (<p>There are no items in the cart!</p>)}

        {processed > 0 ? (renderPayment()) :
        (renderSubmit())}
        </>
    )
}
