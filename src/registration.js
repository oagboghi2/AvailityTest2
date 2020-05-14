import React, { useState, useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
import {
    TextField,
    FormGroup,
    Typography,
    Button,
    Paper
} from "@material-ui/core";
import styles from "./formStyles.js";


const Registration = (props) => {
    const [ firstName, setFirstName ] = useState("Tim");
    const [ lastName, setLastName ] = useState("");
    const [ NPI, setNPI ] = useState(0);
    const [ buisnessAddress, setBuisnessAddress ] = useState("");
    const [ telePhone, setTelePhone ] = useState("");
    const [ emailAddress, setEmailAddress ] = useState("")

    function doSomething() { // 1. props is accessible inside the function so you can skip the parameter
        console.log(firstName);
     }
    doSomething();
    
    return (
        <div>
            <form  >
                <Typography >
                    Provider Registration
                </Typography>
            </form>
        </div>
    )

} 

export default withStyles(styles, { withTheme: true })(Registration);