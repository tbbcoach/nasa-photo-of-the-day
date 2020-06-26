import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import axios from 'axios';
import styled from 'styled-components';

const Page = styled.div`
background-color: dodgerblue;
`

export default function PhotoPage() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=jPo4ckH7fdMloSVxbGXeY1UTFiPhDcMrGI22HxoF')
            .then(response => {
                console.log('API response', response);
                setPhoto(response.data);
            })
            .catch(err => {
                console.log('Error no data', err)
                    
            })
            
    }, []);

    return (
        <Page className='pod'>
            <PhotoCard 
                id={photo.url}
                title={photo.title}
                date={photo.date}
                explanation={photo.explanation}
                image={photo.url}
            />
        </Page>
    )
}