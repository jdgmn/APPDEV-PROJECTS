import PropTypes from 'prop-types'

export default function Body(props) {
    return(
        <div className="person">
            <br></br>
            <h1>{props.title}</h1>
            <h1>{props.titleExt}</h1>
            <img src={props.image}></img>
            <br></br>
            <br></br>
            <h3>{props.descr}</h3>
            <h3>{props.descrExt}</h3>
            <h3>{props.descrEnd}</h3>
        </div>
    )
}
Body.defaultProps = {
    title: "default",
    titleExt: "default",
    image: "https://placeholder.pics/svg/150x150",
    descr: "default",
    descrExt: "default",
    descrEnd: "default"
}

Body.propTypes = {
}