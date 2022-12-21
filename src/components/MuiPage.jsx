import React from "react";
import {Grid, Box, Container, Card, Paper} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/system";
import {makeStyles} from "@mui/styles";
export default () => {
    const theme = createTheme({
        palette: {
            dark: {
                bg: "#222",
                color: "#fff"
            },
            light: {
                bg: "#dfdfdf",
                color: "#000"
            }
        }
    });
    const styles = makeStyles({
        main: {
            // border: 1,
            boxShadow: "0 0 2px 0 #000",
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8
        }
    });
    const st = styles();
    return <ThemeProvider theme={theme}>
        {/* <Container> */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className={st.main}>^_^</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className={st.main}>O_o</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className={st.main}>=_=</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className={st.main}>*_*</Box>
                </Grid>
                <Grid item xs={12}>
                    {/* <Card variant="outlined"></Card> */}
                    {/* <Paper square variant="outlined" elevation={0}/> */}
                </Grid>
            </Grid>
        {/* </Container> */}
    </ThemeProvider>
}