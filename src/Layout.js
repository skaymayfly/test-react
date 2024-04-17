import { Outlet, Link } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button'
import Vtipy from "./Vtipy";
import Typography from "@mui/material/Typography";
 
export default function Layout() {

    


    return (
        <>
            <nav >
                <ul>
                   <Button  underline="none" variant="h5" href="/test-react/#">Home &#128205;</Button>
                   <Button underline="none" variant="h5" href="/test-react/#/vtipy">Vtipy </Button>
                   
                </ul>
            </nav> 
          
        </>
    )
     }