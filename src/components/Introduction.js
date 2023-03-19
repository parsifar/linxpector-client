import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Introduction = () => {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to LinxPector!
            </Typography>

            <Typography variant="body1" mb={2}>
                LinxPector is designed to help you improve your website's search
                engine optimization (SEO). It crawls your site, finds all links
                on each page, and sorts them into incoming and outgoing link
                lists. It also shows you the anchor text for each link.
            </Typography>
            <Typography variant="body1" mb={2}>
                By doing so, LinxPector provides you with a comprehensive
                overview of your site's link structure and offer valuable
                insights to help you optimize your website's SEO. Whether you're
                a website owner or SEO professional, LinxPector can help you
                optimize internal link structure and analyze your site's link
                profile.
            </Typography>
            <Typography variant="body1" mb={2}>
                Start using LinxPector today and take your website to the next
                level! Just enter your site's domain below and gain valuable
                insights to improve your website's SEO performance!
            </Typography>
        </Box>
    );
};

export default Introduction;
