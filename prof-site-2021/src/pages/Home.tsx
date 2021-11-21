import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Container';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { hostname } from 'os';

class Home extends React.Component {
    render() {
        return(
            <Grid container justifyContent='center'>
                <Grid item xs={12}>
                    <Box sx={{p: 3, mt: 10, backgroundColor: 'white'}} >
                        <Grid item>
                            <Typography align="center" variant="h5" gutterBottom>
                                Data Science &nbsp; | &nbsp; Machine Learning &nbsp; | &nbsp; Software Engineer
                            </Typography>
                        </Grid>
                        <Grid item sx={{mt: 5, mb: 3}}>
                            <Typography align="center" variant="body1" gutterBottom>
                                6+ years experience in interdisciplinary applied research
                            </Typography>
                            <Typography align="center" variant="body1" gutterBottom>
                                for health and humanitarian technology
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent='center'>
                        <img src='wfh_zion_icon2-38t-onwhite.png' width='300'></img>
                    </Grid>
                </Grid>
                <Grid item sx={{p: 3, mt: 3}}>
                    <Typography align="center" variant="subtitle1" fontStyle="italic">
                        Site under development... Updated version coming soon!
                    </Typography>
                </Grid> </Grid>   
        )
    }
}

export default Home;