import React, { useRef } from "react";
import { Button } from '@mui/material';

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import BgPic from "../assets/bg.png"
import CountdownTimer from '../components/Countdown/Countdown';
import {
    PageTitle,
    PageHeader,
    PageSubheader,
    PageText,
    PageWrapper,
    PageContent,

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

const ApplyButton = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '10px',
    fontSize: '60px',
    fontFamily: '"Archivo Black", sans-serif',
};

export default function Fams() {

    const famSystemRef = useRef(null);
    const scrollToSection = () => {
        if (famSystemRef.current) {
            famSystemRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <PageWrapper>
                <NavBar />
                <PageContent>
                    {/* <div style={BackgroundImage}> */}
                        {/* <PageTitle>VSU Fams</PageTitle> */}

                    <div style={BackgroundImage}>
                        {/* Your other content goes here */}
                    </div>    
                    
                    <React.StrictMode>
                        <CountdownTimer />
                    </React.StrictMode>

                    <div style={ApplyButton} >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={scrollToSection}
                            sx={{
                                width: 225,
                                textTransform: 'none',
                                fontFamily: 'Kumbh Sans',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                marginBottom: '30vh'
                            }}>

                            Fam System Info
                        </Button>


                        {/* <Button
                            variant="contained"
                            size="large"
                            onClick={scrollToSection}
                            href="/MeetTheBigs"
                            sx={{
                                width: 225,
                                textTransform: 'none',
                                fontFamily: 'Kumbh Sans',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                marginBottom: '30vh'
                            }}>

                            Meet the Bigs!
                        </Button> */}
                    </div>

                        
                    {/* </div> */}

                    <PageHeader ref={famSystemRef}>VSU Fam System!</PageHeader>
                    <PageText>
                        VSU is excited to announce our first-ever fam-system for the 2024-2025 academic
                        year! We highly encourage everyone to sign up to join a fam, where you will meet
                        plenty of new people, form lifelong memories, and be a part of a large Vietnamese
                        community at UCLA! Learn more about how the fam system works and how to join a fam below!
                    </PageText>
                    <PageSubheader>What is a Fam?</PageSubheader>
                        <ListItem>‣ Join one of our 26 fams!</ListItem>
                        <ListItem>‣ Each fam consists of 2 bigs and 6–8 littles</ListItem>
                        <ListItem>‣ Bigs and littles are like big siblings and little siblings (hence the “fam” system)</ListItem>

                    <PageSubheader>How do I join a fam?</PageSubheader>
                        <ListItem>‣ Applications to be a little open on October 1st at 9PM</ListItem>
                        <ListItem>‣ Mark your calendars—spots are limited and will be filled up fast!</ListItem>
                        <ListItem>‣ Fam assignments will happen by the end of week 2 of fall quarter, and you will remain in your fam throughout the academic year!</ListItem>
                        <ListItem>‣ Follow @vsufams and @vsubruins on insta to stay in the loop!</ListItem>

                    <PageSubheader>What can I expect if I become a little?</PageSubheader>
                        <ListItem>‣ Regular hangouts with your fam (e.g. study dates, dinners, kickbacks, beach trips, etc.)</ListItem>
                        <ListItem>‣ A close knit group of your peers who you will become very close with throughout the year</ListItem>
                        <ListItem>‣ A close knit group of your peers who you will become very close with throughout the year</ListItem>
                        <ListItem>‣ Discounts on all VSU parties 🤪</ListItem>
                </PageContent>
                <Footer />
            </PageWrapper>
        </>
    );
}
