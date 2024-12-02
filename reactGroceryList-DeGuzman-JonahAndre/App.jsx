import Shop from "./Shop"
import Header from "./Header"
import Footer from "./Footer"

function App() {
  let items = [
    // this is our list of objects, to be imported as props
    {id: 1, name: "Grape", price: 5},
    {id: 2, name: "Orange", price: 10},
    {id: 3, name: "Kiwi", price: 15},
    {id: 3, name: "Banana", price: 20},
    {id: 3, name: "Cucumber", price: 25},
  ]

  return (
    <>
    <Header />
    <Shop items = {items} />
    <Footer />
    </>
  )
}

export default App