import { useLocation } from "react-router-dom"

export default function Game() {
    const location = useLocation()
    const game = location.state.game
    
    return (
        <>
        <div>
            <h1>{game.name}</h1>
            <a href={game.vndb}><img src={game.imgLink} style={{width: 620, height: 360}}/></a>
            <p>{game.description}</p>
            <div className="reviews">
                <h3>Reviews:</h3>
                <ul>
                    <li>{game.rev1}</li>
                    <li>{game.rev2}</li>
                    <li>{game.rev3}</li>
                    <li>{game.rev4}</li>
                    <li>{game.rev5}</li>
                </ul>
            </div>
        </div>
        </>
    )
}
