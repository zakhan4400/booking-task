import { Box, Grid, Switch, Typography } from '@mui/material'
import React from 'react'

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Page = () => {
  return (
    <Box sx={{marginTop:1, flexGrow: 1, padding:2,borderRadius:2, backgroundColor:'white'}}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{textAlign:'start',display:'flex',justifyContent:'space-between'}}>
            <Typography variant='h5'>Protect Against Accedntal Bookings</Typography>
            <Switch {...label} defaultChecked />
           
        </Box>
        <Typography  >To save you time handling accidental bookings, we automatically waive
             cancellation fees for guests who cancel within the first 24 hours of a booking 
             being made. You can change this period of time later in your property management platform.
            </Typography>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Page
