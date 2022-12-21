import React, {useState} from "react";
import {Container} from "react-bootstrap";
import BootstrapPage from "./components/BootstrapPage";
import MuiPage from "./components/MuiPage";
import Tabs from "./components/Tabs";

import {Button} from "@mui/material";

export default () => {
    const [home, setHome] = useState(true);
    const changePage = e => {
        setHome(!home);
    }
    return <>
        {/* <h1>React is here!</h1> */}
        <Container className="menu py-3 mb-2">
            <Button variant="contained" disabled={home ? true : false} onClick={changePage}>Bootstrap</Button>
            <Button variant="contained" disabled={home ? false : true} onClick={changePage}>MUI</Button>
        </Container>
        <Tabs/>
        {home && <BootstrapPage/>}
        <Container>
            {!home && <MuiPage/>}
        </Container>
    </>
}
