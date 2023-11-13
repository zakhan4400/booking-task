import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Stack,Button, Typography, InputLabel, FormControl, Select, MenuItem } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const GuestAT = () => {
  return (
    <>
     <Box sx={{ flexGrow: 1,textAlign:'start' }}>
      <Grid container spacing={2}>
{/* Section One */}
        <Grid item xs={12} sm={12} md={12} lg={6}xl={6}>
          <Item sx={{textAlign:'start',padding:2}}>
            <Typography variant='h4' marginTop={2}>Guest's arrival time</Typography>
 <Typography marginTop={1.5}>from:</Typography>
            <Stack  spacing={1} direction="row" marginTop={1.5}>
           <Button variant="outlined" fullWidth>12:00 PM</Button>
           <Button variant="outlined" fullWidth>2:00 PM</Button>
           <Button variant="outlined" fullWidth>12:00 AM</Button>
           <Box sx={{ minWidth: 120 }}>
               <FormControl fullWidth>
                 <InputLabel id="demo-simple-select-label">Other</InputLabel>
                 <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                 >
                   <MenuItem
                   value={10}>Ten</MenuItem>
                   <MenuItem>Twenty</MenuItem>
                   <MenuItem>Thirty</MenuItem>
                 </Select>
               </FormControl>
           </Box>
         </Stack>
 <Typography marginTop={1.5}>to:</Typography>
         <Stack spacing={1} direction="row" marginTop={1.5}>
         <Button variant="outlined" fullWidth>12:00 PM</Button>
           <Button variant="outlined" fullWidth>2:00 PM</Button>
           <Button variant="outlined" fullWidth>12:00 AM</Button>
           <Box sx={{ minWidth: 120 }}>
               <FormControl fullWidth>
                 <InputLabel id="demo-simple-select-label">Other</InputLabel>
                 <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                 >
                   <MenuItem
                   value={10}>Ten</MenuItem>
                   <MenuItem>Twenty</MenuItem>
                   <MenuItem>Thirty</MenuItem>
                 </Select>
               </FormControl>
           </Box>
         </Stack>
          </Item>
        </Grid>

{/* Section Two */}
        <Grid item xs={12} sm={12} md={12} lg={6}xl={6}>
          <Item sx={{textAlign:'start',padding:2}}>

             <Typography variant='h4' marginTop={1.5}>Guest's departure time</Typography>
        <Typography marginTop={2}>from (optional):</Typography>
          <Stack spacing={1} direction="row"marginTop={1.5}>
          <Button variant="outlined" fullWidth>12:00 PM</Button>
           <Button variant="outlined" fullWidth>2:00 PM</Button>
           <Button variant="outlined" fullWidth>12:00 AM</Button>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Other</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem
                    value={10}>Ten</MenuItem>
                    <MenuItem>Twenty</MenuItem>
                    <MenuItem>Thirty</MenuItem>
                  </Select>
                </FormControl>
            </Box>
          </Stack>
          <Typography marginTop={1.5}>to:</Typography>
          <Stack spacing={1} direction="row" marginTop={1.5}>
          <Button variant="outlined" fullWidth>12:00 PM</Button>
           <Button variant="outlined" fullWidth>2:00 PM</Button>
           <Button variant="outlined" fullWidth>12:00 AM</Button>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Other</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem
                    value={10}>Ten</MenuItem>
                    <MenuItem>Twenty</MenuItem>
                    <MenuItem>Thirty</MenuItem>
                  </Select>
                </FormControl>
            </Box>
          </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>


      {/* 1 */}
      {/* <Grid container spacing={8} my={4}>
        <Grid item xs={12} sm={12} md={6} border={1} p={0}  >
        <Box sx={{backgroundColor:'lightgray',width:'100%',height:'100%'}} boxShadow={4} fullWidth>
        <Typography variant='h4'>Guest's arrival time</Typography>
       
       <Typography >from:</Typography>
         <Stack  spacing={1} direction="row">
           <Button variant="outlined" fullWidth>Outlined</Button>
           <Button variant="outlined" fullWidth>Outlined</Button>
           <Button variant="outlined" fullWidth>Outlined</Button>
           <Box sx={{ minWidth: 120 }}>
               <FormControl fullWidth>
                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
                 <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                 >
                   <MenuItem
                   value={10}>Ten</MenuItem>
                   <MenuItem value={20}>Twenty</MenuItem>
                   <MenuItem value={30}>Thirty</MenuItem>
                 </Select>
               </FormControl>
           </Box>
         </Stack>
         
         <Typography >to:</Typography>
         <Stack spacing={1} direction="row">
           <Button variant="outlined"fullWidth>Outlined</Button>
           <Button variant="outlined"fullWidth>Outlined</Button>
           <Button variant="outlined"fullWidth>Outlined</Button>
           <Box sx={{ minWidth: 120 }}>
               <FormControl fullWidth>
                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
                 <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                 >
                   <MenuItem
                   value={10}>Ten</MenuItem>
                   <MenuItem value={20}>Twenty</MenuItem>
                   <MenuItem value={30}>Thirty</MenuItem>
                 </Select>
               </FormControl>
           </Box>
         </Stack>
         
        </Box>
        </Grid>
       */}
    

    {/* 2 */}
  
      {/* <Grid item xs={12} sm={12} md={6} >
        <Box boxShadow={4} sx={{backgroundColor:'lightgray'}}>
        <Typography variant='h4'>Guest's departure time</Typography>
        <Typography >from (optional):</Typography>
          <Stack spacing={1} direction="row">
            <Button variant="outlined"fullWidth>Outlined</Button>
            <Button variant="outlined"fullWidth>Outlined</Button>
            <Button variant="outlined"fullWidth>Outlined</Button>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem
                    value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
            </Box>
          </Stack>
          <Typography >to:</Typography>
          <Stack spacing={1} direction="row">
            <Button variant="outlined"fullWidth>Outlined</Button>
            <Button variant="outlined"fullWidth>Outlined</Button>
            <Button variant="outlined"fullWidth>Outlined</Button>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem
                    value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Grid> */}
 
 </>
  )
}

export default GuestAT
