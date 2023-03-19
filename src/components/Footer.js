import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const Footer = () => {
    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary">
                {"Copyright © "}
                {new Date().getFullYear()}{" "}
                <Link
                    color="inherit"
                    target="_blank"
                    href="https://parsifar.com/"
                >
                    Ali Parsifar
                </Link>
            </Typography>
        );
    }

    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                px: 2,
                position: "fixed",
                bottom: "0",
                width: "100%",
                backgroundColor: (theme) => theme.palette.grey[200],
            }}
        >
            <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                <Copyright />
            </Container>
        </Box>
    );
};

export default Footer;
