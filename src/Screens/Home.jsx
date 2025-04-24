import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    console.log("Home");

    return (
        <Box p={4} display="flex" flexDirection="column" justifyContent={"flex-start"} alignItems="center" height="100vh">
            {/* First Row: Centered Title */}
            <Grid container justifyContent="center" alignItems="center" mb={5}>
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                    Welcome to the Dashboard
                </Typography>
            </Grid>
            {/* <button onClick={() => navigate('/ReactLifeCycle')}>Go to React Life Cycle</button> */}


            {/* Second Row: Links to other screens */}
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button component={Link} to="/ReactLifeCycle" variant="contained" color="primary"
                    // onClick={() => navigate('/ReactLifeCycle')}
                    >
                        ReactLifeCycle
                    </Button>
                </Grid>
                <button onClick={() => navigate('/ReactLifeCycle')}>Go to React Life Cycle</button>
                <Grid item>
                    <Button component={Link} to="/revenue" variant="contained" color="secondary">
                        Revenue
                    </Button>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/reports" variant="outlined">
                        Reports
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
