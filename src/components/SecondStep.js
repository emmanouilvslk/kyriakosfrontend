import React, { useContext } from "react";

import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";

function SecondStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);

    return (
        <div>
            <div>
                <TextField
                    label="Email"
                    margin="normal"
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    value={userData["email"]}
                    variant="outlined"
                    color="secondary"
                />
            </div>
            <div>
                <TextField
                    label="Country"
                    margin="normal"
                    onChange={(e) => setUserData({ ...userData, country: e.target.value })}
                    value={userData["country"]}
                    variant="outlined"
                    color="secondary"
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        setStep(1);
                    }}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setStep(3);
                    }}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default SecondStep;
