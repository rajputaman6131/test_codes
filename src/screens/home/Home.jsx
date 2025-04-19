import React from 'react'
import SignIn from '../signin/Signin'
import { Alert, Button, TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

const Home = () => {
    return (
        <div>
            {/* <SignIn /> */}
            <Button variant="text">Text</Button>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Here is a gentle confirmation that your action was successful.
            </Alert>
        </div>
    )
}

export default Home