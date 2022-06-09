import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "../Drawer/Drawer.js"
import "./Header.scss";

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Drawer />
                <Typography variant="h6"
                    component="div" sx={{ flexGrow: 1 }}>
                    The Imaginary Unit
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
