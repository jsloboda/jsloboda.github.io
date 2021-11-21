import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { hostname } from 'os';

class Home extends React.Component {
    render() {
        return(
            <Grid container direction="column" alignItems="center">
                <Container disableGutters maxWidth="xs" component="main" sx={{ pt: 8, pb: 6, maxWidth:200, flexDirection:"row"} }>
                    <Grid item sx={{ width:'100%', height:'100%'}}>
                        <img src="/wfh_zion_sage.png" />
                    </Grid>
                    <Grid item>
                        <Typography align="center" variant="h4">Data Science</Typography>
                        <Typography align="center" variant="h4">Machine Learning</Typography>
                        <Typography align="center" variant="h4">Software Engineering</Typography>
                    </Grid>
                </Container>
                <Container disableGutters maxWidth="xs" component="main" sx={{ pt: 8, pb: 6 }}>
                    <Grid item>
                        <Typography align="center" variant="subtitle1">
                        Site under development... Updated version coming soon!
                        </Typography>
                    </Grid>
                </Container>
            </Grid>   
        )
    }
}

export default Home;