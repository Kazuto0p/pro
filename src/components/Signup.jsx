import React from 'react'
import { Button, Link, TextField, Typography } from '@mui/material'

const Signup = () => {
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br />
                <Typography variant="h5" gutterBottom>Sign-Up Form</Typography>
        <TextField id="outlined-basic" label="Username" variant="outlined" color="success" focused /><br /><br />
        <TextField id="outlined-basic" label="Email" variant="outlined" color="success" focused/><br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" color="success" focused/><br /><br />
        <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Signup
