import React from "react";
import { Slide } from 'react-slideshow-image';
import { VideoWrapper } from "../../components/Page/Page";

// Define types for the props
interface DropdownSlideProps {
    slides: string[]; // Array of image URLs (strings)
    videoLink: string; // URL for the video link
}

const DropdownSlide: React.FC<DropdownSlideProps> = ({ slides, videoLink }) => {
    return (
        <Slide
            autoplay={false}
            onChange={function noRefCheck() { }}
            onStartChange={function noRefCheck() { }}
            easing={'ease'}
            transitionDuration={300}
        >
            {slides.map((imageUrl: string, index: number) => (
                <div className="each-slide-effect" key={index}>
                    <div
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                            height: '70vh', // Adjust the height as needed
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                    </div>
                </div>
            ))}
            <div className="each-slide-effect">
                <div
                    style={{
                        height: '70vh', // Adjust the height as needed
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
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
        </Slide>
    );
}

export default DropdownSlide;
