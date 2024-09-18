import PropTypes from 'prop-types'

export default function Header(props) {
    return(
        <header>
            <h1>{props.name} Documentation</h1>
            <nav>
                <ul>
                    <li><button onClick={() => {window.scroll({top:250, behavior:'smooth'})}}><a href="#">Product Overview</a></button></li>
                    <li><button onClick={() => {window.scroll({top:1250, behavior:'smooth'})}}><a href="#">Setup Instructions</a></button></li>
                </ul>
            </nav>
        </header>
    )
}