import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

class About extends React.Component {
    render() {
        return(
            <Grid container>
                <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                    <Grid item>
                        <Typography align="center" variant="h6" gutterBottom>
                            Data Science / Machine Learning / Software Engineer
                        </Typography>
                        <Typography align="center" variant="body1">
                            6+ years experience in interdisciplinary applied research
                        </Typography>
                        <Typography align="center" variant="body1" gutterBottom>
                            primarily for health and humanitarian technology
                        </Typography>
                        <Typography align="center" variant="body1" gutterBottom> &nbsp; </Typography>
                    </Grid>
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
                            Aimed at developing a "full stack data science" skillset.
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
                </Container>
            </Grid>   
        )
    }
}

export default About;