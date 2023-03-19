import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Loading = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                padding: "30px",
            }}
        >
            <Typography variant="h6" sx={{ mr: 4 }}>
                Crawling the website...{" "}
            </Typography>
            <CircularProgress color="primary" />
        </Box>
    );
};

export default Loading;