import React, { useEffect, useState } from 'react'
import { CardModel } from '../types/model'
import Card from './Card'
import CardFactory from './CardFactory'



const CardContainer: React.FC = () => {
    const [state, setState] = useState<CardModel[]>([])

    const createCard = (card: CardModel) => {
        const { id, createdDate, contentType, src, href, content } = card
        setState([
            ...state,
            {
                id,
                createdDate,
                contentType,
                src,
                href,
                content,
            }
        ])
    }
    
    const deleteCard = (id: CardModel['id']) => {
        setState(state.filter( card => card.id !== id ))
    }

    return (
        <div>
            {
                state.map(card => {
                    const { id, createdDate, contentType, content, href, src } = card;
                    return (
                        <Card 
                            id={id}
                            createdDate={createdDate}
                            contentType={contentType}
                            deleteCard={deleteCard}
                            content={content}
                            href={href}
                            src={src}
                        />
                    )
                })
            }
            <CardFactory onCreate={createCard}></CardFactory>
        </div>
    )
}

export default CardContainer
