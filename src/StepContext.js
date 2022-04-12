import React, { useEffect, useState } from "react";
import App from "./App";
import axios from "axios";

export const multiStepContext = React.createContext();

function StepContext() {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    function submitData() {
        console.log("submitted");
        setFinalData((finalData) => [...finalData, userData]);
        axios
            .post("http://localhost:3001/users", userData)
            .then(() => {
                alert("successful insert");
            })
            .catch((error) => {
                console.log(error);
            });
        console.log("FINAL DATA" + finalData);
        setUserData("");
        setStep(1);
    }

    useEffect(() => {
        axios.get("http://localhost:3001/users").then((response) => {
            console.log(response);
            setFinalData(response.data);
        });
    }, []);

    return (
        <div>
            <multiStepContext.Provider
                value={{
                    currentStep,
                    setStep,
                    userData,
                    setUserData,
                    finalData,
                    setFinalData,
                    submitData,
                }}
            >
                <App />
            </multiStepContext.Provider>
        </div>
    );
}

export default StepContext;
