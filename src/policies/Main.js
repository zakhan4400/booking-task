import React from 'react'
import { Container } from 'react-bootstrap'
import Cancellations from './Cancellations'
import { Button, Typography } from '@mui/material'
import Page from '../PAAB.js/Page'
import GuestAT from '../GuestAT/GuestAT'
import MinimumStay from '../minimumStay/MinimumStay'
import Children from '../children/Children'
import Pets from '../pets/Pets'


const Main = () => {
  return (
    <Container >
        <div style={{borderStyle:'none',textAlign:'start'}}>
        <Typography padding={2}  variant='h4' fontWeight="bold">Policies</Typography>
        <Typography paddingLeft={2}paddingBottom={3}>Spacify some basic policies. Do you alow children or pets? How flexible are you with Cancellations?</Typography>
        
    <Cancellations/>
    <Page /><br/>
    <GuestAT/><br/>
    <Children/><br/>
    <Pets/><br/>
    <MinimumStay/>
    <Button variant="contained" sx={{marginTop:1,padding:2}} fullWidth>Continue</Button>
    </div>
    
    <br/>
    </Container>
  )
}

export default Main
