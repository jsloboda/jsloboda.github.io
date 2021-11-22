import React from 'react';
import Box from '@mui/material/Container';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { blueGrey } from '@mui/material/colors';

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
                
                <Grid item>
                <Grid container justifyContent="center" sx={{mt: 4}}>
                    <Grid item  xs={10} md={5} sx={{m: 2}}>
                        <Box sx={{p:5, backgroundColor: blueGrey[300], border:'0px solid black'}}>
                            <Typography align="center" variant="h6" paragraph color="common.black" fontStyle="bold">
                                Broad algorithm development experience: 
                            </Typography>
                            <Typography align="center" variant="body2" color="common.black">
                                <List dense={true}>
                                    <ListItem>- machine learning model development</ListItem>
                                    <ListItem>(time series prediction/classificaiton, object detection & image classification,
                                    lanuage models)</ListItem>
                                    <ListItem>- high-level embedded model deployment</ListItem>
                                    <ListItem>- physiological signal processing</ListItem>
                                    <ListItem>- speech analysis</ListItem>
                                    <ListItem>- geospatial analysis</ListItem>
                                    <ListItem>- social statistics</ListItem>
                                </List>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item  xs={10} md={5} sx={{m: 2}}>
                        <Box sx={{p:5, backgroundColor: blueGrey[300], border:'0px solid black'}}>
                            <Typography align="center" variant="h6" paragraph color="common.black" fontStyle="bold">
                                Software development supporting:
                            </Typography>
                            <Typography align="center" variant="body2" color="common.black">
                                <List dense={true}>
                                    <ListItem>- data wrangling & preparation</ListItem>
                                    <ListItem>- exploratory analysis</ListItem>
                                    <ListItem>- scalable experimentation</ListItem>
                                    <ListItem>- visualization</ListItem>
                                    <ListItem>- web development & design (1 year)</ListItem>
                                </List>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
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

/*
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
                            Developing a "full stack data science" skillset.
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
*/