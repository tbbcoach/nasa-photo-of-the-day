import React from 'react';
import styled from 'styled-components';

const Headline1 = styled.h2`
font-size: 2.5rem;
text-decoration: underline dashed;
`

const Date = styled.h6`
border: 2px solid blue;
margin: 0 40%;
font-size: 1.25rem;
color: red;
border-radius: 25px;
background: violet;
`

const Explanation = styled.p`
font-size: 1.2rem;
`


export default function PhotoCard(props) {
    return (
        <div className='photo' key={props.id}>
            <Headline1>Title: {props.title}</Headline1>
            <Date>Date: {props.date}</Date>
            <h2>Explanation</h2>
            <Explanation>{props.explanation} </Explanation>
            <h2>Photo</h2>
            <img src={props.image} alt="space pic" />


        </div>
    );

};