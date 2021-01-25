import React from 'react'
import CardImg from './CardImg'
import CardBody from './CardBody'
import CardTitle from './CardTitle'
import CardDesc from './CardDesc'
import CardBuy from './CardBuy'
import CardWapper from './CardWapper'

function Card(props) {
    return (
        <CardWapper>
            <CardImg url={props.url} />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardDesc>{props.desc}</CardDesc>
                <CardBuy>{props.buy}</CardBuy>
            </CardBody>
        </CardWapper>
    );
}

export default Card