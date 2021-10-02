import React from 'react'
import { CardModel } from '../types/model';
import { DocumentReference } from 'firebase/firestore/lite'

interface CardProp {
    id: string,
    data: CardModel,
    deleteCard: (id: string) => void,
}

const Card: React.FC<CardProp> = ( props ) => {
    const date = new Date()
    date.setTime(props.data.createdDate)

    const { data: card, deleteCard } = props;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        deleteCard(props.id)
    }

    return (
        <div>
            created: {date.getTime()}<br/>
            {{
                image: <img src={card.src} alt={card.content}></img>,
                link: <a href={card.href}>{card.content}</a>,
                text: card.content
            }[card.contentType]}
            <br/>
            <button onClick={handleClick}>delete</button>
        </div>
    )
}

export default Card