import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Pets = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item sx={{textAlign:'start',padding:3}}>
          <Typography  variant='h4' >Pets</Typography>
        <Typography marginTop={1} backgroundColor="lightgray"sx={{width:{xs:'100%',sm:'100%',md:'100%',lg:'70%',xl:'70%'},padding:'8px'}}>Some guests like to travel with their furry friends. Indicate if you allow pets and if any charges apply.</Typography>
        <Typography  variant='h6' marginTop={1} >Do you allow pets</Typography>

        <FormControl sx={{width:{xs:'100%',sm:'25%',md:'25%',lg:'25%',xl:'25%'},marginTop:2}}>
        <InputLabel id="demo-simple-select-label">No</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem >1</MenuItem>
          <MenuItem >2</MenuItem>
          <MenuItem >3</MenuItem>
        </Select>
      </FormControl>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Pets
