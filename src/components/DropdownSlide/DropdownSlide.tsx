import React, { useState } from "react";
import { Button } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import BgPic from "../../assets/bg.png"

import {
    VideoWrapper
} from "../../components/Page/Page";

const DropdownSlide = ({ slides, videoLink }) => {

    return (<Slide
        autoplay={false}
        onChange={function noRefCheck() { }}
        onStartChange={function noRefCheck() { }}
        transitionDuration={300}>
        {slides.map((imageUrl, index) => (
            <div className="each-slide-effect" key={index}>
                <div style={{
                    backgroundImage: `url(${imageUrl})`,
                    height: '70vh', // Adjust the height as needed
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <span>{`Slide ${index + 1}`}</span>
                </div>
            </div>
        ))}
        <div className="each-slide-effect">
            <div style={{
                height: '70vh', // Adjust the height as needed
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <VideoWrapper>
                    <iframe
                        src={videoLink}
                        title="YouTube video"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </VideoWrapper>
            </div>
        </div>
    </Slide>)
}

export default DropdownSlide;