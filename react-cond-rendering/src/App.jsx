import Header from './Header'
import Footer from './Footer'
import ListofFruits from './ListOfFruits'

function App() {
  const fruits = [
    {id: 1, name: "apple", color: "red"},
    {id: 2, name: "banana", color: "yellow"},
    {id: 3, name: "orange", color: "orange"},
    {id: 4, name: "grape", color: "purple"},
    {id: 5, name: "kiwi", color: "green"},
  ]

  const desserts = [
    {id: 1, name: "cake", color: "red"},
    {id: 2, name: "ice cream", color: "blue"},
    {id: 3, name: "pie", color: "green"},
  ]

  const redFruits = fruits.filter(fruit => fruit.color === "red")

  return (
    <>
    <Header />
    {fruits.length > 0 && 
    <ListofFruits items={fruits} category="My Favorite Fruits" />}

    {desserts.length > 0 &&
    <ListofFruits items={desserts} category="My Favorite Desserts" />}
    
    <Footer />
    </>
  )
}
export default App