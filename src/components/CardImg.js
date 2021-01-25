import styled from 'styled-components';

const CardImg = styled.div `
width: 286px;
height: 180px;
background: url(${props => props.url}) 50% 50%;

border-bottom: 1px solid gray;
`

export default CardImg