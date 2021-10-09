import React from 'react'
import { CardModel } from '../types/model'
import { Button, Card } from 'react-bootstrap'

interface CardProp {
    id: string,
    data: CardModel,
    deleteCard: (id: string) => void,
}

const ImageCard: React.FC<CardProp> = ( props ) => {
    const date = new Date()
    date.setTime(props.data.createdDate)

    const { data: card, deleteCard } = props;


    return (
        <div>
            <Card>
                <Card.Img variant="top" src={card.src}/>
                <Card.Footer className='text-muted'>
                        created at {date.getTime()}
                    </Card.Footer>
            </Card>
        </div>
    )
}

export default ImageCard