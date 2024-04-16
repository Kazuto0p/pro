import { Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ViewEmployee = () => {
var[data,setData] = useState([])
useEffect(()=>{
  axios.get("http://localhost:8080/view")
  .then((response)=>{
    console.log(response.data)
    setData(response.data)
    console.log(data)
  })

  .catch((err)=>console.log(err))
},[])
const deleteValue = (id)=>{
  console.log(id)
  axios.delete("http://localhost:8080/remove/"+id).
  then((response)=>{
    alert(response.data)
    window.location.reload(false)
  }).catch((err)=>console.log(err))

}}
const reportWebVitals = () => {
  return (
    <div style={{margin:'4%'}}>
            <br /><br /><br /><br /><br /><br /><br />
                <Button variant='contained' color='warning' component={Link} to='/Admin'>
            PROMOTIONS
          </Button>
          <Button variant='contained' color='warning' component={Link} to='/Admin'>
            SPECIAL OFFERS
          </Button>&nbsp;&nbsp;
          <Button variant='contained' color='warning' component={Link} to='/Admin'>
           VIEW ORDER HISTORY
          </Button>&nbsp;&nbsp;
          
    <Grid container spacing={2}>
        {data.map((val,i)=>(
        <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h5' gutterBottom>
             Food : {val.fname}
            </Typography>
            <Typography variant='h6'>
            Price : {val.fprice}
            </Typography>
           
              <br />
             
          
          </CardContent>
          <CardActions>
            <Button
            onClick={()=>deleteValue(val._id)}
            size="small" variant='contained' color='secondary'>
              Delete
              </Button>
            <Button size="small" variant='contained' color='secondary'>Update</Button>
          </CardActions>
        </Card>
          </Grid>
  ))}
    </Grid>

      
    </div>
  )
}

export default Home
