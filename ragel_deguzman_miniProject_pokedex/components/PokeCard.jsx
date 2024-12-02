import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Sprite = styled.img`
    width: 5em;
    height: 5em;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px, rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
    -moz-user-select: none
    -website-user-select: none
    user-select: none
    -o-user-select: none
`

export default function PokeCard({ name: propName, url }) {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [pokeIndex, setPokeIndex] = useState('');

    useEffect(() => {
        const index = url.split('/')[url.split('/').length - 2];
        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;

        setName(propName);
        setImageUrl(imgUrl);
        setPokeIndex(index);
    }, [propName, url]);

    return (
        <div className='col-md-3 col-sm-6 mb-5'>
            <Link to={`pokemon/${pokeIndex}`}>
                <div className='card'>
                    <h5 className='card-header'>{pokeIndex}</h5>
                    <Sprite
                        className='card-img-top rounded mx-auto mt-2'
                        src={imageUrl}
                        alt={name}
                    />
                    <div className='card-body mx-auto'>
                        <h6 className='card-title'>
                            {name
                                .toLowerCase()
                                .split(' ')
                                .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                                .join(' ')}
                        </h6>
                    </div>
                </div>
            </Link>
        </div>
    );
}
