import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';


const ApplyButton = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '10px',
    fontSize: '60px',
    fontFamily: '"Archivo Black", sans-serif',
};

const CountdownToDate: React.FC = () => {
    // Set the target date and time
    // const targetDate = new Date('2024-09-15T18:41:00'); // 10-01-24 9:00PM
    const targetDate = new Date('2024-10-01T20:59:59'); // 10-01-24 9:00PM

    // Initialize state for the remaining time (days, hours, minutes, seconds)
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // State to track if the countdown is complete
    const [isCountdownComplete, setIsCountdownComplete] = useState(false);

    useEffect(() => {
        // Update the countdown every second
        const intervalId = setInterval(() => {
            updateCountdown();
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    // Function to calculate the remaining time until the target date
    const updateCountdown = () => {
        const currentTime = new Date().getTime();
        const targetTime = targetDate.getTime();
        const difference = targetTime - currentTime;

        if (difference > 0) {
            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Update state
            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
            });
        } else {
            // If the countdown is finished, set all values to 0
            setTimeLeft({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            });
            setIsCountdownComplete(true);
        }
    };

    const timerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        padding: '2vh',
        marginBottom: '40px',
        fontSize: '60px',
        fontFamily: '"Archivo Black", sans-serif',
        color: 'white',
    };

    const segmentStyle = {
        display: 'flex',
        flexDirection: 'column' as const, // TypeScript specific for inline styles
        alignItems: 'center',
    };

    const labelStyle = {
        fontSize: '18px',
        color: 'white',
        fontFamily: '"Kumbh Sans", sans-serif',
    };



    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'white', fontSize: '50px', marginTop: '12.5vh' }}>Littles' Application is Closed—All Spots Full!</h1>
            <div style={timerStyle}>
                <div style={segmentStyle}>
                    <span>{timeLeft.days}</span>
                    <span style={labelStyle}>Days</span>
                </div>
                <div style={segmentStyle}>
                    <span>{timeLeft.hours}</span>
                    <span style={labelStyle}>Hours</span>
                </div>
                <div style={segmentStyle}>
                    <span>{timeLeft.minutes}</span>
                    <span style={labelStyle}>Minutes</span>
                </div>
                <div style={segmentStyle}>
                    <span>{timeLeft.seconds}</span>
                    <span style={labelStyle}>Seconds</span>
                </div>
            </div>
            <div style={ApplyButton} >
                <Button
                    variant="contained"
                    disabled
                    href="https://forms.gle/azuSNs4W8n2jpQSr7"
                    size="large"
                    sx={{
                        width: 400,
                        textTransform: 'none',
                        fontFamily: 'Kumbh Sans',
                        fontWeight: 'bold',
                        fontSize: '35%',
                        "&.Mui-disabled": {
                            background: "#888888",
                            opacity: '.7',
                            color: "white",
                        }
                    }}>

                    Apply to Join a Fam!
                </Button>
            </div>
        </div>
    );
};

export default CountdownToDate;
