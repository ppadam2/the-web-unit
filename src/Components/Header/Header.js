import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Header.scss";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar className="header-text">
                <Link to="/">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }}>
                        The Imaginary <span>Unit</span>
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
