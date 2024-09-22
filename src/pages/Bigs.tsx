import React, { useState } from "react";
import { Button } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import MenuItem from '@mui/material/MenuItem';

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import StylizedButton from "../components/StylizedButton/StylizedButton";
import DropdownSlide from "../components/DropdownSlide/DropdownSlide";
import BgPic from "../assets/bg.png"
import BigPic from "../assets/bigs.png"
import {
    PageTitle,
    PageHeader,
    PageSubheader,
    PageText,
    PageWrapper,
    PageContent,
    DropdownMenu,
    DropdownContent,
    SlideshowWrapper,
    VideoWrapper
} from "../components/Page/Page";

import styled from "styled-components";
import { ListItem } from "@mui/material";

const ExtNavLink = styled("a")`
  text-decoration: none;
  color: black;
  padding: 15px 8px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 18px;

  &:hover {
    border-bottom: black 2px solid;
    padding-bottom: 13px;
  }
`;


const BackgroundImage: React.CSSProperties = {
    backgroundImage: `url(${BgPic})`, // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '85vh',
    width: '102.5vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: '-10vw',
    zIndex: '-1'
};

const buttons = [
    { title: 'Explore', imageUrl: BgPic},
];

const buttons2 = [
    { title: 'the', imageUrl: BigPic },
];

const slides = [
    BgPic,
    BgPic,
    BgPic,
];

const slides2 = [
    BigPic
];

const videoLink = "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ"


export default function Bigs() {

    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    return (
        <>
            <PageWrapper>
                <NavBar />
                <PageContent>
                    {/* <div style={BackgroundImage}> */}
                    <PageTitle>Meet the Bigs!</PageTitle>
                    <PageText>
                        Introducing our 2024–2025 VSU Bigs! Click on any of the Fam Profiles below to learn more about each of the fams and the bigs!
                    </PageText>

                    <DropdownMenu>
                        <StylizedButton buttons={buttons} onButtonClick={() => toggleDropdown(0)}
                        />
                        <DropdownContent isOpen={openDropdownIndex === 0} style={{width: '70vw'}}>
                            <DropdownSlide slides={slides} videoLink={videoLink}/>
                        </DropdownContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <StylizedButton buttons={buttons2} onButtonClick={() => toggleDropdown(1)}
                        />
                        <DropdownContent isOpen={openDropdownIndex === 1} style={{ width: '70vw' }}>
                            <DropdownSlide slides={slides2} videoLink={videoLink} />
                        </DropdownContent>
                    </DropdownMenu>
                    
                </PageContent>
                <Footer />
            </PageWrapper>
        </>
    );
}
