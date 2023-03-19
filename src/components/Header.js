import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";

const Header = () => {
    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Link className="app-logo" to="/">
                            LinxPector
                        </Link>
                    </Typography>

                    <Button
                        variant="contained"
                        disableElevation
                        className="new-crawl-btn"
                    >
                        <Link to="/">New Crawl</Link>
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
