import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Loading = ({ count }) => {
    let loadingText = "Crawling the website...";
    if (count && count > 0) {
        loadingText = `${count} pages crawled.`;
    }
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                padding: "30px",
            }}
        >
            <Typography variant="h6" sx={{ mr: 4 }}>
                {loadingText}
            </Typography>

            <CircularProgress color="primary" />
        </Box>
    );
};

export default Loading;
