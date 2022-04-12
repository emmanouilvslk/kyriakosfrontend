import React, { useContext } from "react";

import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";

function ThirdStep() {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

    return (
        <div>
            <div>
                <TextField
                    label="City"
                    margin="normal"
                    onChange={(e) => setUserData({ ...userData, city: e.target.value })}
                    value={userData["city"]}
                    variant="outlined"
                    color="secondary"
                />
            </div>
            <div>
                <TextField
                    label="Postal Code"
                    margin="normal"
                    onChange={(e) => setUserData({ ...userData, postcode: e.target.value })}
                    value={userData["postalcode"]}
                    variant="outlined"
                    color="secondary"
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        setStep(2);
                    }}
                >
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={submitData}>
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default ThirdStep;
