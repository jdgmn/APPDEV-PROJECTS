import Header from "./header"
import Body from "./Body"
import Footer from "./footer"


export default function App() {
  return(
    <>
    <Header />
    <Body name="Jonah" food="Too Many" isHealthy={false} age={22} />
    <Body name="William" food="Spaghetti" isHealthy={false} age={19} />
    <Body name="Gerald" food="Torta" isHealthy={true} age={22} />
    <Body name="Johna" food="Can't Decide" isHealthy={false} age={22} />
    <Body name="Johan" food="Everything" isHealthy={false} age={22} />

    <Body />
    <Footer />
    </>
  )
}