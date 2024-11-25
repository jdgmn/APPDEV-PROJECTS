import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Games from './components/Games'
import Game from './components/Game'
// when importing components ComponentName from file/hierarchy
// {contexts} -> useState, useParamns, BrowserRouter, Link, Route, Routes

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to ="/about">About</Link>
        </li>
        <li>
          <Link to ="/games">Games</Link>
        </li>
      </ul>
    </nav>
    {/*this will be our routes for the application */}
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/games">
        <Route index element = {<Games />} />
        <Route path=":gameid" element = {<Game />} />
      </Route>
      <Route path = "*" element = {<NotFound />} />
    </Routes>
    </>
  )
}

export default App
