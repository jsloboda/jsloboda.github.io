import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

class Publications extends React.Component {
    render() {
        return(
            <Grid container>
                <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                    <Grid item>
                        <Typography align="center" variant="h6" paragraph>
                            Publications
                        </Typography>
                        <Typography align="left" variant="body2" gutterBottom>
                            <ul>
                                <li><a href="https://ieeexplore.ieee.org/abstract/document/9224286">
                                    Tsiligkaridis, T. and Sloboda, J., 2020, August. 
                                    A Multi-task LSTM Framework for Improved Early Sepsis Prediction. 
                                    In International Conference on Artificial Intelligence in Medicine (pp. 49-58). 
                                    Springer, Cham.
                                </a></li>
                                <li><a href="https://ieeexplore.ieee.org/abstract/document/9224286">
                                    Siu, H.C., Sloboda, J., McKindles, R.J. and Stirling, L.A., 
                                    Ankle torque estimation during locomotion from surface electromyography and accelerometry.
                                    In 2020 8th IEEE RAS/EMBS International Conference for Biomedical Robotics and Biomechatronics (BioRob) (pp. 80-87). 
                                    IEEE.
                                </a></li>
                            </ul>
                        </Typography>
                    </Grid>
                </Container>
            </Grid>   
        )
    }
}

export default Publications;