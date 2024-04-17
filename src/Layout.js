import React, { useState } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button'
import Vtipy from "./Vtipy";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
 
export default function Layout(props) {

    const [vybranyVtip, nastavVybranyVtip] = useState("")


    return (
        <>
            <nav  >
                <ul>
                <LinearProgress color="inherit" />
                   <Button  underline="none" variant="h4" href="/test-react/#">Home &#128205;</Button>
                   <Button underline="none" variant="h4" href="/test-react/#/vtipy">Vtipy	&#128514; </Button>
                   <Typography>{vybranyVtip}</Typography>
                   <LinearProgress color="inherit" />
                </ul>
            </nav> 
          
        </>
    )
     }