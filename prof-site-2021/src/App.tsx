import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import  Link from '@mui/material/Link';
import { Route, Switch} from "react-router-dom";
//import './App.css';

function App() {
  return (
    <main>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Jenn Sloboda
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="publications"
              sx={{ my: 1, mx: 1.5 }}
            >
              Publications
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="projects"
              sx={{ my: 1, mx: 1.5 }}
            >
              Projects
            </Link>
          </nav>
          <Button href="resume" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Resume
          </Button>
        </Toolbar>
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Grid item>
          <Typography align="center" variant="h6" gutterBottom>
            Data Science / Machine Learning / Software Engineer
          </Typography>
          <Typography align="center" variant="body1">
            6+ years experience in interdisciplinary applied research
          </Typography>
          <Typography align="center" variant="body1" paragraph>
            primarily for health and humanitarian technology
          </Typography>
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
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography align="center" variant="subtitle1">
          Site under development... Updated version coming soon!
        </Typography>
      </Container>
    </main>
  );
}

export default App;
