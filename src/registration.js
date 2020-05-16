import React, { useState, useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import {
    TextField,
    FormGroup,
    Typography,
    Button,
    Paper
} from "@material-ui/core";
//import styles from "./formStyles.js";
import './registration.css';


const Registration = (props) => {
    const [ firstName, setFirstName ] = useState("Tim");
    const [ lastName, setLastName ] = useState("Stark");
    const [ NPI, setNPI ] = useState(0);
    const [ buisnessAddress, setBuisnessAddress ] = useState("4870 N Deer St");
    const [ telePhone, setTelePhone ] = useState("9514850360");
    const [ emailAddress, setEmailAddress ] = useState("conway299@gmail.com")

    const printForm = (e) => { // 1. props is accessible inside the function so you can skip the parameter
        //e.preventDefault();
        console.log("It clicked")
        alert(`Name: ${firstName} ${lastName}${'\n'}NPI: ${NPI}${'\n'}Buisness Address: ${buisnessAddress}${'\n'}TelePhone: ${telePhone}${'\n'}Email: ${emailAddress}${'\n'}`)
     }
    
    return (
        <div>
            <form  onSubmit={() => printForm()} className={"container"}>
                <Typography className={"formHeader"}>
                    Provider Registration
                </Typography>
                <Paper >
                    <FormGroup className={"formRow"}>
                        <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="First Name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="Last Name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="NPI"
                            value={NPI}
                            onChange={e => setNPI(e.target.value)}
                        />
                        <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="Buisness Address"
                            value={buisnessAddress}
                            onChange={e => setBuisnessAddress(e.target.value)}
                        />
                        <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="Telephone"
                            value={telePhone}
                            onChange={e => setTelePhone(e.target.value)}
                        />
                        <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="Email"
                            value={emailAddress}
                            onChange={e => setEmailAddress(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup className={"formGroup2"}>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                className={"submitButton"}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </Paper>
            </form>
        </div>
    )

} 

export default Registration;