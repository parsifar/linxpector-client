import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";

const LinksTable = ({ linksArray, showType = false }) => {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>URL</TableCell>
                        <TableCell>Anchor Text</TableCell>
                        {showType && <TableCell>Type</TableCell>}
                        <TableCell align="right">Count</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {linksArray.map((linkObj) => (
                        <TableRow
                            key={linkObj.href}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                <Link
                                    href={linkObj.href}
                                    underline="hover"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    {linkObj.href}
                                </Link>
                            </TableCell>
                            <TableCell>{linkObj.anchor[0] || "-"}</TableCell>
                            {showType && (
                                <TableCell>
                                    <Chip
                                        className={linkObj.type}
                                        label={linkObj.type}
                                        variant="outlined"
                                        size="small"
                                    />
                                </TableCell>
                            )}
                            <TableCell align="right">{linkObj.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LinksTable;
