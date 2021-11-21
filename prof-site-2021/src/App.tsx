import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import  Link from '@mui/material/Link';
import { Route, Switch} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Publications from './pages/Publications';
//import './App.css';

function App() {
  return (
    <main>
      <AppBar
        position="static"
        elevation={0}
        sx={{background:"white", borderBottom:"1px solid black"}}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link variant="inherit" underline="none" color="common.black" href="#/home">
                Jennifer Sloboda
            </Link>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="common.black"
              underline="hover"
              href="#/about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
            <Link
              variant="button"
              color="common.black"
              underline="hover"
              href="#/publications"
              sx={{ my: 1, mx: 1.5 }}
            >
              Publications
            </Link>
            <Link
              variant="button"
              color="common.black"
              underline="hover"
              href="#/projects"
              sx={{ my: 1, mx: 1.5 }}
            >
              Projects
            </Link>
          </nav>
          <Button href="/resume_jsloboda.pdf" target="_blank" sx={{ my: 1, mx: 1, p:0, pl:1, pr:1, color: "common.black", ':hover': {color: 'common.white', bgcolor: 'common.black'} }}>
            Resume
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/publications">
          <Publications />
        </Route>
        <Route path="/projects">
          <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography align="center" variant="body1">Coming Soon</Typography>
          </Container>
        </Route>
      </Switch>
    </main>
  );
}

export default App;

/*
sx={{background:"white", borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
*/
