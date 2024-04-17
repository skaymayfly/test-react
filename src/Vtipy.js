import { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



function App() {
    


    const [vtipy, nastavVtipy] = useState([]);
    const [vybranyVtip, nastavVybranyVtip] = useState("");


    useEffect(() => {
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
            .then(odpoved => {
                nastavVtipy(odpoved.data)
            }

            )

    }, [])

    return (
        <>  
        <Typography variant="button" fontSize={40}>VTIPY</Typography> <br></br>
           {vybranyVtip != "" && <Typography variant="button" fontSize={20}>Vybraný vtip je: {vybranyVtip}</Typography>} <br></br>
            <Grid container spacing={1}>
                {vtipy.map(vtip => (
                    <>




                        <Grid item xs={4} key={vtip.type} style={{ listStyle: "none" }}>
                            <Paper elevation={4} onClick={() => nastavVybranyVtip(vtip.setup + vtip.punchline)} style={{textAlign: "center"}}>
                            <Typography variant="overline">{vtip.setup}</Typography> <br></br>
                                <Typography variant="overline">{vtip.punchline}</Typography>
                                </Paper>
                        </Grid>


                    </>
                ))}
            </Grid>
        </>
    );
}

export default App;