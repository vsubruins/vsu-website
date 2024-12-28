import React, { useRef } from "react";
import { Button } from '@mui/material';
import { Chart } from "react-google-charts";

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


export default function FamPoints() {

    const famSystemRef = useRef(null);
    

    const options = {
        title: "Population of Largest U.S. Cities",
        chartArea: { width: "50%" },
        hAxis: {
            title: "Total Population",
            minValue: 0,
        },
        vAxis: {
            title: "City",
        },
    };

    return (
        <>
            <PageWrapper>
                <NavBar />
                <PageContent>
                    {/* <div style={BackgroundImage}> */}
                        {/* <PageTitle>VSU Fams</PageTitle> */}

                    <Chart
                        spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA/edit#gid=0"
                        chartType="BarChart"
                        width="100%"
                        height="400px"
                        options={options}
                    />
                    
                    <React.StrictMode>
                        <CountdownTimer />
                    </React.StrictMode>

                        
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
