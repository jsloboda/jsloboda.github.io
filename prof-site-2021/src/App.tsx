import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link variant="inherit" underline="none" color="text.primary" href="#/home">
                Jennifer Sloboda
            </Link>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#/about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#/publications"
              sx={{ my: 1, mx: 1.5 }}
            >
              Publications
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#/projects"
              sx={{ my: 1, mx: 1.5 }}
            >
              Projects
            </Link>
          </nav>
          <Button href="/resume_jsloboda.pdf" target="_blank" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
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
