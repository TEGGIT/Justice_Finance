import React, {useState} from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import classes from "./ButtonMui.module.scss";

const ButtonMui = ({text, padding, background,img,gap, color, fontSize, hoverBackground, marginTop, borderRadius, height}) => {
    const [hover, setHover] = useState(false)

    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        display:'flex',
        color:`${color}`,
        borderRadius: `${borderRadius}`,
        textTransform: 'none',
        overflow:'hidden',
        marginTop:`${marginTop}`,
        fontSize: `${fontSize}`,
        zIndex:'2',
        gap:`${gap}`,
        height:`${height}`,
        padding: `${padding}`,
        fontStyle: 'normal',
        fontWeight: '600',
        backgroundColor: `${background}`,
        fontFamily: [
            'Inter, sans-serif',
        ].join(','),
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: `${hoverBackground}`,


        },
        '&:active': {
            boxShadow: 'none',
        },
    });





    return (
        <>
            <Stack spacing={0} direction="row">
                <BootstrapButton
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  disableRipple>
                    <img src={img}/>
                    <p>{text}</p>

                    {hover && (
                      <div className={classes.buttonBackground}/>
                    )}
                </BootstrapButton>
            </Stack>
        </>
    );
};

export default ButtonMui;