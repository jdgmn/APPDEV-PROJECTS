export default function Header() {
    return(
        <header>
            <h1 class="title">My Personal Profile</h1>
            <nav>
                <ul>
                    <li><a href="#"></a></li>
                    <li><button onClick={() => {window.scroll({top:50, behavior:'smooth'})}}><a href="#">Home</a></button></li>
                    <li><button onClick={() => {window.scroll({top:800, behavior:'smooth'})}}><a href="#">Hobby</a></button></li>
                    <li><button onClick={() => {window.scroll({top:1600, behavior:'smooth'})}}><a href="#">Interests</a></button></li>
                    <li><button onClick={() => {window.scroll({top:2350, behavior:'smooth'})}}><a href="#">Favourite</a></button></li>
                    <li><a href="#"></a></li>
                    <li><a href="NavBar/index.html">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}