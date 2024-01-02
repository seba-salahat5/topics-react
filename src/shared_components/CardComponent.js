import React, {useContext} from "react";
import {DarkModeContext} from "../App";
import styled from 'styled-components';
import RatingBarComponent from '../shared_components/RatingBarComponent';
import ImageComponent from './ImageComponent.js';

const Card = styled.div`
border-radius: 10px;
object-fit: cover;
overflow: hidden;
box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
background-color: var(--bg_default);
`;

const CardBody = styled.div`
padding-left: 10px;
padding-right: 10px;
padding-top: 12px;
padding-bottom: 20px;
height: 160px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const CardSubTitle = styled.h3`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
font-weight: 400;
`;

const CardTitle = styled.h4`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
white-space: normal;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;

const CardRatingDiv = styled.div`
padding-top: 10px;
padding-bottom: 10px;
display: flex;
`;

const LightText = styled.h5`
font-weight: 200;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

export default function CardComponent({ image, topic, category, rating, name }) {
    const imageSrc = `/assets/${image}`;
    const { darkMode  } = useContext(DarkModeContext);
    return (
        <Card className={darkMode?'dark-mode':'light-mode'}>
            <ImageComponent imageSrc={imageSrc}  alt={topic}/>
            <CardBody>
                <CardSubTitle>{category}</CardSubTitle> 
                <CardTitle>{topic}</CardTitle>
                <CardRatingDiv>
                    <RatingBarComponent rating={rating} />
                </CardRatingDiv>
                <LightText>Author: {name}</LightText>
            </CardBody>
        </Card>
    );
}