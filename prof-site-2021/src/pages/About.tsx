import React from 'react';
import Box from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { blueGrey } from '@mui/material/colors';
//import { useMediaQuery } from "@material-ui/core";

class About extends React.Component {
    render() {
        return(
            <Grid container justifyContent='center'>
                <Grid item xs={12}>
                    <Box sx={{p:3, mt:10, mb:4, backgroundColor: 'white'}} >
                        <Grid container justifyContent="center">
                            <Typography align="center" variant="h5" gutterBottom>
                                Data Science &nbsp; 
                            </Typography>
                            <Typography variant="h5" sx={{display: {xs:'none', sm:'block'} }}>| &nbsp;</Typography>
                            <Typography align="center" variant="h5" gutterBottom>
                                Machine Learning &nbsp; 
                            </Typography>
                            <Typography variant="h5" sx={{display: {xs:'none', sm:'block'} }}>| &nbsp;</Typography>
                            <Typography align="center" variant="h5" gutterBottom>
                                Software Engineer
                            </Typography>
                        </Grid>
                        <Grid item sx={{mt: 5, mb: 3}}>
                            <Grid container justifyContent="center">
                            <Typography align="center" variant="body1" gutterBottom>
                                6+ years experience in
                            </Typography>
                            <Typography align="center" variant="body1" gutterBottom>
                                interdisciplinary applied research
                            </Typography>
                            </Grid>
                            <Typography align="center" variant="body1" gutterBottom>
                                for health and humanitarian technology
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>

                <Grid container justifyContent='center' sx={{mb:10}}>
                    <Grid item xs={11}>
                        <Divider textAlign="left" variant="fullWidth" sx={{width:'100%', mb:2}}>
                            <Typography variant="h6">Data to Insights</Typography>
                        </Divider>
                    </Grid>
                    <Grid container md={7} justifyContent="center">
                    <Box  sx={{pl:4, pr:4, pt:0, pb:1, m:2, backgroundColor: 'white'}}>
                        <Grid item sx={{width:'100%'}}>
                            <Typography align="center" variant="subtitle1" color="common.black" fontStyle="bold" gutterBottom>
                                Broad algorithm development experience 
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="space-evenly">
                            <Grid item justifyContent="left"> 
                                <Typography align="left" variant="body2" color="common.black">
                                    <List dense={true}>
                                        <ListItem>- deep learning model development</ListItem>
                                        <ListItem sx={{pl:5}}>- time series prediction & classification</ListItem>
                                        <ListItem sx={{pl:5}}>- object detection & image classification</ListItem>
                                        <ListItem sx={{pl:5}}>- language/psycholinguistics</ListItem>
                                        <ListItem>- high-level embedded model deployment</ListItem>
                                    </List>
                                </Typography>
                            </Grid>
                            <Grid item justifyContent="left">
                                <Typography align="left" variant="body2" color="common.black">
                                    <List dense={true}>
                                        <ListItem>- physiological signal processing</ListItem>
                                        <ListItem>- speech analysis</ListItem>
                                        <ListItem>- geospatial analysis</ListItem>
                                        <ListItem>- social statistics</ListItem>
                                        <ListItem>- sensor network analysis</ListItem>
                                    </List>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    </Grid>
                    <Grid container md={4}>
                    <Box  sx={{pl:4, pr:4, pt:0, pb:1, m:2, mb:0, backgroundColor: 'white'}}>
                        <Grid item sx={{width:'100%'}}>
                            <Typography align="center" variant="subtitle1" color="common.black" fontStyle="bold" gutterBottom>
                                Supporting development 
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="space-evenly">
                        <Grid item justifyContent="center"> 
                            <Typography variant="body2" color="common.black">
                                <List dense={true}>
                                    <ListItem>- data wrangling</ListItem>
                                    <ListItem>- exploratory data analysis</ListItem>
                                    <ListItem>- dataset preparation</ListItem>
                                    <ListItem>- data visualization</ListItem>
                                    <ListItem>- software for scalable experimentation</ListItem>
                                </List>
                            </Typography>
                        </Grid>
                        </Grid>
                    </Box>
                    </Grid>
                </Grid>

                <Grid container justifyContent='center' sx={{mb:10}}>
                    <Grid item xs={11} >
                        <Divider textAlign="left" variant="fullWidth" sx={{width:'100%', mb:2}}>
                            <Typography variant="h6">Web Dev & Design</Typography>
                        </Divider>
                    </Grid>
                    <Grid container justifyContent="center" sx={{width:'80%', m:2, mt:1}}>
                        <Typography display="inline" align="center" variant="body2" color="common.black" fontStyle="bold">
                            ~1 year experience in front-end web development, requirements development, and UI design.
                            &nbsp;Largely for data dashboards.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justifyContent='center' sx={{mb:10}}>
                    <Grid item xs={11}>
                        <Divider textAlign="left" variant="fullWidth" sx={{width:'100%', mb:2}}>
                            <Typography variant="h6">Tools</Typography>
                        </Divider>
                    </Grid>
                    <Grid container justifyContent="space-evenly">
                        <Grid item md={5} sx={{m:2, mt:1}}>
                            <Typography align="center" variant="subtitle1" color="common.black" fontStyle="bold" paragraph>
                                I work with:
                            </Typography>
                            <Typography align="center" variant="body2" color="common.black" fontStyle="bold" gutterBottom>
                                Python (pandas, scikit-learn, Pytorch, TensorFlow, TFLite, Keras, NLTK, Flask)
                            </Typography>
                            <Typography align="center" variant="body2" color="common.black" fontStyle="bold" gutterBottom>
                                ReactJS (Typescript, Material-UI), AdobeXD
                            </Typography>
                            <Typography align="center" variant="body2" color="common.black" fontStyle="bold" gutterBottom>
                                MATLAB
                            </Typography>
                        </Grid>
                        <Grid item md={5} sx={{m:2, mt:1, mb:0}}>
                            <Typography align="center" variant="subtitle1" color="common.black" fontStyle="bold" paragraph>
                                I've also used:
                            </Typography>
                            <Typography align="center" variant="body2" color="common.black" fontStyle="bold" gutterBottom>
                                Scala, R, C++, C
                            </Typography>
                            <Typography align="center" variant="body2" color="common.black" fontStyle="bold" gutterBottom>
                                SQL, PostGIS, Elasticsearch, Neo4j, Spark
                            </Typography>
                            <Typography align="center" variant="body2" color="common.black" fontStyle="bold" gutterBottom>
                                Kibana, Tableau
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent='center' sx={{mb:10}}>
                    <Grid item xs={11}>
                        <Divider textAlign="left" variant="fullWidth" sx={{width:'100%', mb:2}}>
                            <Typography variant="h6">Communication & Collaboration</Typography>
                        </Divider>
                    </Grid>
                    <Grid container alignContent="center">
                            <Grid container justifyContent="center" sx={{width:'100%', m:2, mt:1}}>
                                <Typography align="center" variant="subtitle2" color="common.black" fontStyle="bold">
                                    Frequent interdisciplinary teamwork.&nbsp;&nbsp;
                                </Typography>
                                <Typography align="center" variant="subtitle2" color="common.black" fontStyle="bold">
                                    Communicate to audiences with a range of technical backgrounds.&nbsp;&nbsp;
                                </Typography>
                                <Typography align="center" variant="subtitle2" color="common.black" fontStyle="bold">
                                    Engage with end users & domain experts.&nbsp;&nbsp; 
                                </Typography>
                                <Typography align="center" variant="subtitle2" color="common.black" fontStyle="bold">
                                    Create & present reports/briefings.&nbsp;&nbsp; 
                                </Typography>
                            </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent='center' sx={{mb:10}}>
                    <Grid item xs={11}>
                        <Divider textAlign="left" variant="fullWidth" sx={{width:'100%', mb:2}}>
                            <Typography variant="h6">Motivation</Typography>
                        </Divider>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography align="center" variant="subtitle2" color="common.black" paragraph>
                            Mission-driven.
                        </Typography>
                        <Typography align="center" variant="subtitle2" color="common.black" paragraph>
                            Passionate about health technology; 
                            understanding human minds, health, and behavior at multiple scales; 
                            and ventures for good.
                        </Typography>
                        <Typography align="center" variant="subtitle2" color="common.black" paragraph>
                            Growing a "full stack data science" skillset.
                        </Typography>
                        <Typography align="center" variant="subtitle2" color="common.black" paragraph>
                            Enjoy creating & learning.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justifyContent='center' sx={{mb:10}}>
                    <Grid item xs={11}>
                        <Divider textAlign="left" variant="fullWidth" sx={{width:'100%', mb:2}}>
                            <Typography variant="h6">What I Look For</Typography>
                        </Divider>
                    </Grid>
                    <Grid container justifyContent="space-evenly" sx={{width:'80%', m:2, mt:1}}>
                        <Typography align="center" variant="subtitle2" color="common.black" fontStyle="bold">
                            Dynamic roles ("wearing many hats").&nbsp;
                        </Typography>
                        <Typography align="center" variant="subtitle2" color="common.black" fontStyle="bold">
                            Technically challenging and multi-disciplinary work.&nbsp;
                        </Typography>
                        <Typography align="center" variant="subtitle2" color="common.black" fontStyle="bold">
                            Positive, impact-driven missions.&nbsp;
                        </Typography>
                        <Typography align="center" variant="subtitle2" color="common.black" fontStyle="bold">
                            Team-oriented, growth-minded environments.&nbsp;
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default About;

/* 
<Grid item>
    <Typography align="center" variant="h5" gutterBottom>
        Data Science &nbsp; | &nbsp; Machine Learning &nbsp; | &nbsp; Software Engineer
    </Typography>
</Grid>
*/

/*
<Grid container justifyContent="space-evenly" sx={{width:'80%', m:2, mt:1, mb:6}}>
    <Typography align="center" variant="subtitle1" color="common.black" fontStyle="bold">
        dynamic roles ("wearing many hats")
    </Typography>
    <Typography align="center" variant="subtitle1" color="common.black" fontStyle="bold">
        technically challenging and multi-disciplinary work 
    </Typography>
    <Typography align="center" variant="subtitle1" color="common.black" fontStyle="bold">
        positive, impact-driven missions 
    </Typography>
    <Typography align="center" variant="subtitle1" color="common.black" fontStyle="bold">
        team-oriented, growth-minded environments
    </Typography>
</Grid>
*/
/*
<Grid container justifyContent="space-evenly" sx={{width:'80%', m:2, mt:1}}>
    <Typography align="center" variant="subtitle2" color="common.black" fontStyle="bold">
        Dynamic role ("wearing many hats"). &nbsp;
        Technically challenging and multi-disciplinary work. &nbsp;
        Positive, impact-driven mission. &nbsp;
        Team-oriented, growth-minded environment.
    </Typography>
</Grid> 
*/

/*
Grid item xs={10} sx={{mb:6}}>
                    <Divider textAlign="left" variant="fullWidth" sx={{width:'100%', mb:2}}>
                        <Typography variant="h6">What I've Done</Typography>
                    </Divider>
                    <Typography align="left" variant="body2" color="common.black">
                        machine learning model development 
                        (time series prediction/classificaiton, object detection & image classification,
                        lanuage models) and high-level embedded deployment,
                        physiological signal processing, speech analysis, 
                        geospatial analysis, and social statistics.
                    </Typography>
                </Grid>
                <Grid item xs={10} sx={{mb:4}}>
                    <Divider textAlign="left" variant="fullWidth" sx={{width:'100%', mb:2}}>
                        <Typography variant="h6">Supporting software development</Typography>
                    </Divider>
                    <Typography align="left" variant="body2" color="common.black" paragraph>
                        Supporting software development for data preparation, exploratory analysis,
                        scalable experimentation, visualization.     
                    </Typography>
                    <Typography align="left" variant="body2" color="common.black">
                        Web development & design (~1 year experience).
                    </Typography>
                </Grid>
                <Grid item xs={10} sx={{mb:4}}>
                    <Divider textAlign="left" variant="fullWidth" sx={{width:'100%', mb:2}}>
                        <Typography variant="h6">Collaboration & Communication</Typography>
                    </Divider>
                    <Typography align="left" variant="body2" color="common.black">
                        Frequently work on interdisciplinary teams and 
                        communicate to audiences with a range of technical backgrounds. 
                        Engage with end users & domain experts. Create & present reports/briefings.     
                    </Typography>
                </Grid>
*/


/*
    <Grid item>
                <Grid container justifyContent="center" sx={{mt: 4}}>
                    <Divider textAlign="left">LEFT</Divider>
                    <Grid item  xs={10} md={5} sx={{m: 2}}>
                        <Card sx={{p:5, backgroundColor: blueGrey[200], border:'0px solid black'}}>
                            <Typography align="center" variant="h6" paragraph color="common.black" fontStyle="bold">
                                Broad algorithm development experience: 
                            </Typography>
                            <Typography align="center" variant="body2" color="common.black">
                                <List dense={true}>
                                    <ListItem>- machine learning model development</ListItem>
                                    <ListItem sx={{pl:5}}>time series prediction & classificaiton, object detection & image classification,
                                    lanuage models</ListItem>
                                    <ListItem>- high-level embedded model deployment</ListItem>
                                    <ListItem>- physiological signal processing</ListItem>
                                    <ListItem>- speech analysis</ListItem>
                                    <ListItem>- geospatial analysis</ListItem>
                                    <ListItem>- social statistics</ListItem>
                                </List>
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item  xs={10} md={5} sx={{m: 2}}>
                        <Card sx={{p:5, backgroundColor: blueGrey[200], border:'0px solid black'}}>
                            <Typography align="center" variant="h6" paragraph color="common.black" fontStyle="bold">
                                Software development supporting:
                            </Typography>
                            <Typography align="center" variant="body2" color="common.black">
                                <List dense={true}>
                                    <ListItem>- data wrangling & preparation</ListItem>
                                    <ListItem>- exploratory analysis</ListItem>
                                    <ListItem>- scalable experimentation</ListItem>
                                    <ListItem>- visualization</ListItem>
                                </List>
                            </Typography>
                        </Card>
                        <Card sx={{mt: 3, pl:5, pr:5, pt:2, pb:2, backgroundColor: blueGrey[200], border:'0px solid black'}}>
                            <Typography align="center" variant="body1" color="common.black" fontStyle="bold">
                                Web development & design
                            </Typography>
                            <Typography align="center" variant="body2" color="common.black" fontStyle="italic">
                                (~1 year experience)
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item  xs={10} sx={{m: 2}}>
                        <Card sx={{p:5, backgroundColor: blueGrey[200], border:'0px solid black'}}>
                            <Typography align="center" variant="body1" color="common.black" fontStyle="bold">
                                Engage with end users & domain experts. Create & present reports/briefings.
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
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