import React, {useState} from "react"
import Login from "./Login"

export default function Shop(props) {
    let ShopItems = props.items
    // these are arrays of objects being passed to ShopItems\
    const [cart, setCart] = useState([])

    function AddItem(item) {
        setCart(c => [...c, item])
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

    if(props.isLoggdIn === false) {
        return <Login />
    }
    else {
        return(
            <>
            <h4>This is the shop: </h4>
            <ul>{RenderItems()}</ul>
            <h4>Cart Items: </h4>
            {cart.length > 0 ? (<ul>{renderCart()}</ul>) : 
            (<p>THere are no items in the cart!</p>)}
            </>
        )
    }
}