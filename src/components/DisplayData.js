import React, { useContext } from "react";
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from "@mui/material";
import { multiStepContext } from "../StepContext";

function DisplayData() {
    const { finalData } = useContext(multiStepContext);

    return (
        <div style={{ padding: "10px" }}>
            <TableContainer style={{ display: "flex", justifyContent: "center" }}>
                <Table
                    border="1"
                    style={{ width: "70%", justifyContent: "center" }}
                    size="small"
                    aria-label="caption table"
                >
                    <TableHead>
                        <TableRow style={{ backgroundColor: "gray" }}>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email Address</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Post Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {finalData.map((data) => (
                            <TableRow key={data.email}>
                                <TableCell>{data.firstname}</TableCell>
                                <TableCell>{data.lastname}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.country}</TableCell>
                                <TableCell>{data.city}</TableCell>
                                <TableCell>{data.postcode}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default DisplayData;
