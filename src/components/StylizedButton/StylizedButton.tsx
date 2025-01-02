import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
    FamName
} from "../Page/Page";

// Define types for button objects
interface ButtonType {
    title: string;
    imageUrl: string;
    width?: string;
}

// Define types for the props of StylizedButton
interface StylizedButtonProps {
    buttons: ButtonType[];
    onButtonClick?: (button: ButtonType) => void;
}

// Styled components
const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.35,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.0,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

// StylizedButton component with types
const StylizedButton: React.FC<StylizedButtonProps> = ({ buttons, onButtonClick }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedButton, setSelectedButton] = useState<ButtonType | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>, button: ButtonType) => {
        setAnchorEl(event.currentTarget);
        setSelectedButton(button);
        if (onButtonClick) onButtonClick(button);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedButton(null);
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 0, width: '100%' }}>
            {buttons.map((button, index) => (
                <ImageButton
                    focusRipple
                    key={index}
                    style={{
                        width: button.width || '100%',
                    }}
                    onClick={(event) => handleClick(event, button)}
                >
                    <ImageSrc style={{ backgroundImage: `url(${button.imageUrl})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <FamName style={{
                            fontFamily: 'Lexend',
                            fontSize: '15px'
                        }}>
                            {button.title}
                        </FamName>
                    </Image>
                </ImageButton>
            ))}
        </Box>
    );
};

export default StylizedButton;
