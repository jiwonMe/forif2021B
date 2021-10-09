import React from 'react'
import { Button, CloseButton } from 'react-bootstrap'
import { CardModel } from '../types/model'
import ImageCard from './ImageCard'
import LinkCard from './LinkCard'
import TextCard from './TextCard'


interface CardProp {
    id: string,
    data: CardModel,
    deleteCard: (id: string) => void,
}

const GenericCard: React.FC<CardProp> = (props) => {
    const date = new Date()
    date.setTime(props.data.createdDate)

    const { data: card, deleteCard } = props;
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        deleteCard(props.id)
    }

    const style = {
        position: 'absolute',
        width: 200,
        marginRight: 0,
    }
    return (
        <div style={{position: 'relative'}}>
            <div style={{position: 'absolute', right: '5px', zIndex: 2}}><CloseButton  onClick={handleClick}/></div>
        {{
            link: <LinkCard {...props}/>,
            image: <ImageCard {...props}/>,
            text: <TextCard {...props}/>,
        }[card.contentType]}

        </div>

    )
}

export default GenericCard
