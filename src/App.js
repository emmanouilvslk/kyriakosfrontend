import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "./StepContext";
import { useContext, useEffect } from "react";
import DisplayData from "./components/DisplayData";
import axios from "axios";

function App() {
    const { currentStep, finalData } = useContext(multiStepContext);

    function showStep(step) {
        switch (step) {
            case 1:
                return <FirstStep />;
            case 2:
                return <SecondStep />;
            case 3:
                return <ThirdStep />;
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <Stepper
                    style={{ width: "20%" }}
                    activeStep={currentStep - 1}
                    orientation="horizontal"
                >
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                </Stepper>

                {showStep(currentStep)}
                {finalData.length > 0 ? <DisplayData /> : null}
            </header>
        </div>
    );
}

export default App;
