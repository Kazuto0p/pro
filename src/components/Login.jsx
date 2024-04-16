import React from 'react'
import { Button, TextField, Typography } from '@mui/material'

const Login= () => {
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br />
        <Typography variant="h5" gutterBottom>
            Login Form
        </Typography>
        <TextField id="outlined-basic" label="UserName" variant="outlined" color="success" focused /><br /><br />
        <TextField id="outlined-basic" label="Email Id" variant="outlined" color="success" focused /><br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" color="success" focused /><br /><br />
         <br /><br />
        <Button variant="contained">Submit</Button>
    </div>
  )
  }

export default Login