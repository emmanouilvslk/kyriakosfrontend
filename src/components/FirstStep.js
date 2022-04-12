import React, { useContext } from "react";

import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";

function FirstStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div>
            <div>
                <TextField
                    label="First Name"
                    onChange={(e) => setUserData({ ...userData, firstname: e.target.value })}
                    value={userData["firstname"]}
                    margin="normal"
                    variant="outlined"
                    color="secondary"
                />
            </div>
            <div>
                <TextField
                    label="Last Name"
                    margin="normal"
                    onChange={(e) => setUserData({ ...userData, lastname: e.target.value })}
                    value={userData["lastname"]}
                    variant="outlined"
                    color="secondary"
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setStep(2);
                    }}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default FirstStep;
