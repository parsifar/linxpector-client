import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import LinksTable from "./LinksTable";

const Results = ({ backendResponse }) => {
    return Object.keys(backendResponse).map((page) => (
        <div key={page}>
            <Typography
                variant="h5"
                color="text.primary"
                align="center"
                gutterBottom
                sx={{ mt: 4 }}
            >
                {page}
            </Typography>

            {/* incoming links accordion */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ width: "60%", flexShrink: 0 }}>
                        Incoming Links
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        Total: {backendResponse[page].incoming.count}
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <LinksTable
                        linksArray={backendResponse[page].incoming.links}
                    />
                </AccordionDetails>
            </Accordion>

            {/* outgoing links accordion */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ width: "60%", flexShrink: 0 }}>
                        Outgoing Links
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        Total: {backendResponse[page].outgoing.count}
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <LinksTable
                        linksArray={backendResponse[page].outgoing.links}
                        showType={true}
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    ));
};

export default Results;
