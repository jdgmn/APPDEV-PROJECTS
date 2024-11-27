import imgMe from '../assets/me.jpg'

export default function About() {
    return (
        <>
        <h1>About me:</h1>
        <img src={imgMe} />
        <p>I may not read a lot of visual novels, but these ones in particular are my favourites.</p>
        <p>I also have many hobbies such as TTRPGs and TCGs.</p>
        <br />
        <p>This is written by:
            Jonah Andre De Guzman
        </p>
        </>
    )
}