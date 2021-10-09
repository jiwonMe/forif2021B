import React from 'react'
import { CardModel } from '../types/model'
import { Button, Card } from 'react-bootstrap'

interface CardProp {
    id: string,
    data: CardModel,
    deleteCard: (id: string) => void,
}

const LinkCard: React.FC<CardProp> = ( props ) => {
    const date = new Date()
    date.setTime(props.data.createdDate)

    const { data: card, deleteCard } = props;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src=""/>
                <Card.Body>
                    <Card.Link href={card.href}>{card.content}</Card.Link>
                </Card.Body>
                <Card.Footer className='text-muted'>
                        created at {date.getTime()}
                    </Card.Footer>
            </Card>
            <br/>
        </div>
    )
}

export default LinkCard