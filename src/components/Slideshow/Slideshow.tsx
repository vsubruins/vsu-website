import React from "react";
import styled from "styled-components";

// Define types for the props
interface SlideshowProps {
    images: string[];
}

const SlideshowWrapper = styled('div')`
    margin: 0 auto;
    overflow: hidden;
    max-width: 60vw;
`

const SlideshowSlider = styled('div')`
    white-space: nowrap;
    transition: ease 1500ms;
`

const Slide = styled.img`
    height: 40vw;
    width: 100%;
    display: inline-block;
`

const SlideshowDots = styled('div')`
    text-align: center;
`

const Dot = styled('button')`
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;
    border: none;
`

const ActiveDot = styled('button')`
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: var(--lightyellow);
    border: none;
`

export default function Slideshow({ images }: SlideshowProps) {
    const [index, setIndex] = React.useState(0);
    const delay = 5000;
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => { };
    }, [index, images.length]);

    const handleDots = (idx: number) => {
        if (index === idx) {
            return (
                <ActiveDot key={idx} onClick={() => { setIndex(idx); }} />
            );
        } else {
            return (
                <Dot key={idx} onClick={() => { setIndex(idx); }} />
            );
        }
    }

    return (
        <SlideshowWrapper>
            <SlideshowSlider style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {images.map((img, index) => (
                    <Slide
                        key={index}
                        src={img}
                    />
                ))}
            </SlideshowSlider>

            <SlideshowDots>
                {images.map((_, idx) => (
                    handleDots(idx)
                ))}
            </SlideshowDots>
        </SlideshowWrapper>
    );
}
