import React from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import classes from "./ButtonMui.module.scss";
const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    display:'flex',
    borderRadius: '0',
    textTransform: 'none',
    fontSize: 12,
    padding: '12px 24px',
    fontStyle: 'normal',
    fontWeight: '600',
    backgroundColor: '#363636',
    fontFamily: [
        'Inter, sans-serif',
    ].join(','),
    '&:hover': {
        backgroundColor: 'rgb(189,13,13)',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});
const ButtonMui = ({text}) => {
    return (
        <>
            <Stack spacing={0} direction="row">
                <BootstrapButton variant="contained" disableRipple>
                    <p>{text}</p>
                    <div className={classes.backgroundButton}/>
                </BootstrapButton>
            </Stack>
        </>
    );
};

export default ButtonMui;