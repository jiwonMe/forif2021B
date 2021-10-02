import React from 'react'
import { CardModel } from '../types/model';

interface CardProp extends CardModel{
    deleteCard: (id:string) => void
}

const Card: React.FC<CardProp> = ( props ) => {
    const date = new Date()
    date.setTime(props.createdDate)

    const { contentType, deleteCard } = props;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        deleteCard(props.id)
    }

    return (
        <div>
            created: {date.getTime()}<br/>
            {{
                image: <img src={props.src} alt={props.content}></img>,
                link: <a href={props.href}>{props.content}</a>,
                text: props.content
            }[contentType]}
            <br/>
            <button onClick={handleClick}>delete</button>
        </div>
    )
}

export default Card