import { Box, FormControl, Grid,InputLabel,MenuItem,Select,Typography} from '@mui/material'
import  React, { useState } from 'react'
import LinearProgressWithLabel from './CancellationsProgress'




const Cancellations = () => {
    const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1, padding:2,border:'2px solid blue',borderRadius:2, backgroundColor:'white'}}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{textAlign:'start'}}>
        <Typography variant='h5'>Cancellations</Typography>
        <Typography>When can your guests cancel their booking for free?</Typography>

        <FormControl sx={{width:{xs:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%"}}}>
        <InputLabel  id="demo-simple-select-label">Text</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={text}
          label="Text"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Typography>Don't worry you can make changes later!</Typography>
<br/><br/>
      <Box sx={{textAlign:'start',display:'flex',justifyContent:'space-between'}}>
        <Typography>Offer free Cancellations</Typography>
        <Typography>Guest pays total price</Typography>
        </Box>
        <LinearProgressWithLabel/>
        <br/><br/>
        <Box sx={{backgroundColor:'lightgray',borderRadius:'4px',padding:2}}>
            
            <Typography variant='h6'>Your guests will see this summary when they book</Typography><br/>
            <Typography sx={{fontStyle:'italic'}}>"You can cancel for free until one day before arrival. You'll be changed the total price of reservation if you cancel within 1 day before arraival. if you don't show up, the no show-fee will be the same as the cancelation fee." </Typography>
            
        </Box>

        </Box>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Cancellations
