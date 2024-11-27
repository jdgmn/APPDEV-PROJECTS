import { Link } from "react-router-dom"
import sgate from '../assets/sgate.png'
import ktshj from '../assets/ktshj.jpg'
import clnd from '../assets/clnd.png'
import ftmgn from '../assets/ftmgn.jpg'
import ncsu from '../assets/ncsu.jpg'

export default function Games() {
    const games = [
        {
            id: 1,
            name: 'Steins;Gate',
            description: 'A sci-fi visual novel where a group of friends accidentally discover time travel and find themselves tangled in a conspiracy that could alter the course of history.',
            imgLink: `${sgate}`,
            vndb: 'https://vndb.org/v2002',
            rev1: 'An incredible narrative with a deep, intricate story. (IGN)',
            rev2: 'Steins;Gate delivers a perfect balance of science fiction and emotional storytelling. (Metacritic)',
            rev3: 'A masterpiece of visual novels that tackles time travel in a brilliant way. (GameSpot)',
            rev4: 'A compelling story that will leave you questioning the nature of reality. (Kotaku)',
            rev5: 'The plot twists are mind-blowing, and the characters are unforgettable. (Destructoid)'
        },
        {
            id: 2,
            name: 'Katawa Shoujo',
            description: 'A visual novel about a boy who, after being diagnosed with a serious illness, transfers to a new school for students with disabilities. The game explores themes of acceptance, disability, and the complexity of relationships.',
            imgLink: `${ktshj}`,
            vndb: 'https://vndb.org/v945',
            rev1: 'A deeply emotional and human story that tackles real-world issues with care and sensitivity. (IGN)',
            rev2: 'Beautiful character development and a focus on overcoming adversity make this a must-play. (Kotaku)',
            rev3: 'A thoughtful and respectful approach to disability and the relationships that form under unique circumstances. (Metacritic)',
            rev4: 'One of the most heartwarming and realistic visual novels, with unforgettable characters. (Game Informer)',
            rev5: 'The emotional journey you embark on with the protagonist and the girls is incredibly rewarding. (VG247)'
        },
        {
            id: 3,
            name: 'Clannad',
            description: 'A visual novel that explores family, love, and friendship as the protagonist, Tomoya Okazaki, navigates his high school life, meets several girls, and uncovers personal and emotional stories.',
            imgLink: `${clnd}`,
            vndb: 'https://vndb.org/v4',
            rev1: 'An emotional rollercoaster that explores family bonds, love, and personal growth. (IGN)',
            rev2: 'A visual novel that beautifully combines romance, drama, and slice-of-life moments. (Metacritic)',
            rev3: 'Clannad’s narrative is rich with character development, and its emotional depth is unmatched. (Kotaku)',
            rev4: 'One of the best visual novels that offers an unforgettable experience, filled with heart-wrenching moments. (Game Informer)',
            rev5: 'The story will make you laugh, cry, and feel connected to the characters like never before. (Destructoid)'
        },
        {
            id: 4,
            name: 'The House in Fata Morgana',
            description: 'A gothic, psychological visual novel that spans centuries, telling the story of tragedy, human nature, and insanity through beautiful artwork and a haunting narrative.',
            imgLink: `${ftmgn}`,
            vndb: 'https://vndb.org/v12402',
            rev1: 'A stunning visual novel with a haunting, thought-provoking story. (Metacritic)',
            rev2: 'The themes of madness, tragedy, and revenge are explored in such a profound way. (IGN)',
            rev3: 'Beautiful art, an incredible soundtrack, and a truly engaging story. (Kotaku)',
            rev4: 'One of the best-written visual novels out there with fantastic twists. (Destructoid)',
            rev5: 'A slow burn, but one of the most rewarding experiences in visual novels. (VG247)'
        },
        {
            id: 5,
            name: 'Narcissu',
            description: 'A short but deeply emotional visual novel about a terminally ill girl and her journey of facing death, loss, and the connections she forms along the way.',
            imgLink: `${ncsu}`,
            vndb: 'https://vndb.org/v10',
            rev1: 'A moving and heart-wrenching story that explores the themes of life and death. (IGN)',
            rev2: 'A minimalist visual novel that has an emotional impact far greater than its length. (Metacritic)',
            rev3: 'A somber and philosophical narrative that stays with you long after the ending. (Kotaku)',
            rev4: 'Highly recommended for fans of emotional storytelling. (Game Informer)',
            rev5: 'A powerful narrative about human mortality, loss, and healing. (VG247)'
        }
    ]

    return (
        <>
            <h1>Games List: </h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to={`/games/${game.id}`} state={{ game }}>
                            <strong>{game.name}</strong>
                        </Link>
                        - {game.description}
                    </li>
                ))}
            </ul>
        </>
    )
}
