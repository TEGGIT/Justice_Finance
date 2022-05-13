import React from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const BootstrapButton = styled(Button)({
    boxShadow: 'none',
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
        backgroundColor: 'rgb(211,145,145)',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
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
                    {text}
                </BootstrapButton>
            </Stack>
        </>
    );
};

export default ButtonMui;