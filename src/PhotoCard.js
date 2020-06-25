import React from 'react';


export default function PhotoCard(props) {
    return (
        <div className='photo' key={props.id}>
            <h2>Title: {props.title}</h2>
            <h6>Date: {props.date}</h6>
            <p>Explanation - {props.explanation} </p>
            <p>photo = {props.url}</p>
            <img src={props.image} alt="space pic" />


        </div>
    );

};