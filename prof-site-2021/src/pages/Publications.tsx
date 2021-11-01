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
                        <Typography align="left" variant="body2" paragraph>
                                Forthcoming:&nbsp;&nbsp;
                                Utility of Inter-subject Transfer Learning for Wearable-Sensor-Based Joint Torque Prediction Models.
                                IEEE EMBC 2021.
                        </Typography>
                        <Typography align="left" variant="body2" paragraph>
                            <a href="https://ieeexplore.ieee.org/document/9513274">
                            H. C. Siu, J. Sloboda, R. J. McKindles and L. A. Stirling, 
                            "A Neural Network Estimation of Ankle Torques From Electromyography and Accelerometry," 
                            in IEEE Transactions on Neural Systems and Rehabilitation Engineering, 
                            vol. 29, pp. 1624-1633, 2021, doi: 10.1109/TNSRE.2021.3104761.
                            </a>
                        </Typography>
                        <Typography align="left" variant="body2" paragraph>
                            <a href="https://ieeexplore.ieee.org/abstract/document/9224286">
                                Siu, H.C., Sloboda, J., McKindles, R.J. and Stirling, L.A., 
                                Ankle torque estimation during locomotion from surface electromyography and accelerometry.
                                In 2020 8th IEEE RAS/EMBS International Conference for Biomedical Robotics and Biomechatronics (BioRob) (pp. 80-87). 
                                IEEE.
                            </a>
                        </Typography>
                        <Typography align="left" variant="body2" paragraph>
                            <a href="https://ieeexplore.ieee.org/abstract/document/9224286">
                                Tsiligkaridis, T. and Sloboda, J., 2020, August. 
                                A Multi-task LSTM Framework for Improved Early Sepsis Prediction. 
                                In International Conference on Artificial Intelligence in Medicine (pp. 49-58). 
                                Springer, Cham.
                            </a>
                        </Typography>
                        <Typography align="left" variant="body2">
                            Public Technical Report:&nbsp;&nbsp;
                            <a href="https://www.ll.mit.edu/r-d/publications/human-trafficking-technology-roadmap-targeted-development-strategy-department">
                                The Human Trafficking Technology Roadmap: 
                                A Targeted Development Strategy for the Department of Homeland Security 
                            </a>
                        </Typography>
                        <Typography align="left" variant="caption" paragraph>
                            (primary contributions regarding trafficking measurement & modeling: 
                            Section 3.4, Appendices D & E)
                        </Typography>
                        <Typography align="left" variant="body2" paragraph>
                            <a href="https://www.isca-speech.org/archive/interspeech_2018/sloboda18_interspeech.html">
                                Sloboda, J., Lammert, A., Williamson, J., Smalt, C., Mehta, D.D., Curry, C.I., Heaton, K., Palmer, J., Quatieri, T. 
                                (2018) Vocal Biomarkers for Cognitive Performance Estimation in a Working Memory Task. 
                                Proc. Interspeech 2018, 1756-1760, doi: 10.21437/Interspeech.2018-2418
                            </a>
                        </Typography>
                        <Typography align="left" variant="body2" paragraph>
                            <a href="https://link.springer.com/chapter/10.1007/978-3-319-12289-2_4">
                                Frau-Pascual, A., Vincent, T., Sloboda, J., Ciuciu, P. and Forbes, F., 2014. 
                                Physiologically informed Bayesian analysis of ASL fMRI data. 
                                In Bayesian and grAphical Models for Biomedical Imaging (pp. 37-48). 
                                Springer, Cham.
                            </a>
                        </Typography>
                        <Typography align="left" variant="body2" paragraph>
                            <a href="https://www.pnas.org/content/110/35/14432.short">
                                Borjigin, J., Lee, U., Liu, T., Pal, D., Huff, S., Klarr, D., Sloboda, J., Hernandez, J., Wang, M.M. and Mashour, G.A., 
                                2013. Surge of neurophysiological coherence and connectivity in the dying brain. 
                                Proceedings of the National Academy of Sciences, 110(35), pp.14432-14437.
                            </a>
                        </Typography>
                        <Typography align="left" variant="body2" paragraph>
                            <a href="https://ieeexplore.ieee.org/abstract/document/6183071">
                                Sloboda, J. and Das, M., 2011, July. 
                                A simple sleep stage identification technique for incorporation in inexpensive electronic sleep screening devices. 
                                In Proceedings of the 2011 IEEE National Aerospace and Electronics Conference (NAECON) 
                                (pp. 21-24). IEEE.
                            </a>
                        </Typography>
                    </Grid>
                </Container>
            </Grid>   
        )
    }
}

export default Publications;