import { Link } from "react-router-dom"

export default function Games() {
    const games = [
        {id: 1, name: 'TeamFight Tactics', description: 'Auto-battler Game'},
        {id: 2, name: 'VALORANT', description: 'One of the games of all time'},
        {id: 3, name: '2xKO', description: 'Unreleased'},
        {id: 4, name: 'League of Legends', description: '#1 MOBA Game'},
    ]

    return(
        <>
        <h1>Games List: </h1>
        <ul>
            {games.map((game) => (
                <li key = {game.id}>
                <Link to =
                {`/games/${game.id}`} state=
                {{game}}>
                <strong>{game.name}</strong>
                </Link>
                - {game.description}
            </li>
            ))}
        </ul>
        </>
    )
}