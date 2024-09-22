import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        // '& .MuiTypography-root': {
        //     border: '4px solid currentColor',
        // },
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

const StylizedButton = ({ buttons, onButtonClick }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleClick = (event, button) => {
        setAnchorEl(event.currentTarget);
        setSelectedButton(button);
        onButtonClick && onButtonClick(button);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedButton(null);
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {buttons.map((button, index) => (
                <ImageButton
                    focusRipple
                    key={index}
                    style={{
                        width: button.width || '30%',
                    }}
                    onClick={(event) => handleClick(event, button)}
                >
                    <ImageSrc style={{ backgroundImage: `url(${button.imageUrl})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={(theme) => ({
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: `calc(${theme.spacing(1)} + 6px)`,
                            })}
                        >
                            {button.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
            ))}
        </Box>
    );
};

export default StylizedButton;
