import React from 'react';
import Box from '@mui/material/Container';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

class About extends React.Component {
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
                <Grid item xs={12} sx={{mb: 7}}>
                    <Grid container justifyContent='center'>
                        <img src='wfh_zion_icon2-38t-onwhite.png' width='300'></img>
                    </Grid>
                </Grid>


                <Grid item minWidth='100%'>
                <Box sx={{p: 5, mt: 4, backgroundColor: 'lightgray', minWidth:'100%'}}>
                    <Grid item>
                        <Typography align="center" variant="body2" paragraph>
                            Broad algorithm development experience spanning: 
                            machine learning model development 
                            (time series prediction/classificaiton, object detection & image classification,
                            lanuage models) and high-level embedded deployment,
                            physiological signal processing, speech analysis, 
                            geospatial analysis, and social statistics.
                        </Typography>
                        <Typography align="center" variant="body2" paragraph>
                            Supporting software development for 
                            data preparation, exploratory analysis, scalable experimentation, visualization. 
                            Aimed at 
                        </Typography>
                        <Typography align="center" variant="body2" paragraph>
                            Engage with end users & domain experts. Create & present reports/briefings.
                        </Typography>
                        <Typography align="center" variant="body2" paragraph>
                            ~1 year web development and design experience.
                        </Typography>
                        <Typography align="center" variant="body2" paragraph>
                            Especially passionate about health technology; 
                            understanding human minds, health, and behavior at multiple scales; 
                            and ventures for good.
                        </Typography>
                        <Typography align="center" variant="body2" paragraph>
                            Enjoy dynamic roles ("wearing many hats"); 
                            technically challenging and multi-disciplinary work; 
                            positive, impact-driven missions; 
                            and team-oriented, growth-minded environments.
                        </Typography>
                    </Grid>
                </Box>
                </Grid>
            </Grid>   
        )
    }
}

export default About;

/*
                <Grid item sx={{p: 3, mt: 3}}>
                    <Typography align="center" variant="subtitle1">
                        Developing a "full stack data science" skillset.
                    </Typography>
                </Grid> 
*/