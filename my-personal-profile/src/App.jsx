import Header from "./header"
import Body from "./Body"
import Footer from "./footer"

export default function App() {
  return(
    <>
    <Header />

    <Body title="Hello and Welcome!" titleExt="" image="pusheen.jpg"
    descr="My Name is Jonah Andre De Guzman,"
    descrExt="I am a BSCS student from University of Baguio" descrEnd=""/>

    <Body title="Some of My Hobbies Include:" titleExt="CHESS" image="chess.png"
    descr="I find chess really interesting, the amount of legacy knowledge it contains"
    descrExt="with the different move variations and openings (that are discovered over time) is amazing." descrEnd=""/>

    <Body title="A Particular Interest of Mine is:" titleExt="PHILOSOPHY" image="stoic.jpg"
    descr="Philosophy would have been my second course but only one course is allowed per student."
    descrExt="I have a fascination for philosophy even though I have only read a little bit,"
    descrEnd="My favourite read was Also Sprach Zarathustra by Friedrich Nietzsche"/>

    <Body title="One of My Favourite Foods is:" titleExt="CHICKEN TERIYAKI" image="teriyaki.jpg"
    descr="I like Japanese culture, especially their food, my particular favourite is"
    descrExt="chicken teriyaki, I love the balance between the sweetness and the tang." descrEnd=""/>

    <Footer />
    </>
  )
}