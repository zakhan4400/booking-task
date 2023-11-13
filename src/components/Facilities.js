import { Typography,Container,Box,Grid,styled,Paper, Button } from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckboxLabels from './CheckboxLabels';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Facilities = () => {
    // const [parking, setParking] = React.useState('');

    // const handleChange = (event) => {
    //     setParking(event.target.value);
    // };

  return (
    <>
    <Container>
      <Typography marginBottom={1} variant='h4' fontWeight='bold' textAlign='start'>Facilities & Services</Typography>
        <Typography textAlign='start'>
        Now let us know general details about your property like facilities available,
         Internet, Parking, and the languages you speak.
        </Typography><br/>

        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
{/* Parking  section... */}
        <Grid item xs={9} >
          <Item sx={{textAlign:'start',padding:2}}>

            <Typography  variant='h5'>Parking</Typography>
            <Typography
            
             marginTop={1}
             marginBottom={1}
             sx={{backgroundColor:'#eeeeee',padding:'4px',fontSize:12,width:{xs:230,sm:230,md:450}}}>
             The information is especially important for those traveling to your property by car.
             </Typography>

          <Typography marginBottom={1}>Is parking available to guests?</Typography>
          
      <FormControl size='small'  sx={{width:{xs:230,sm:370,md:370,lg:370} }}>
        <InputLabel id="demo-simple-select-autowidth-label">No</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
        //   value={parking}
        //   onChange={handleChange}
          autoWidth
          label="Parking"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>Park1</MenuItem>
          <MenuItem value={21}>Park2</MenuItem>
          <MenuItem value={22}>Park3</MenuItem>
        </Select>
      </FormControl>
    
          </Item>
        </Grid>

{/* Breakfast Section... */}
          <Grid item xs={9}>
          <Item sx={{textAlign:'start',padding:2}}>
            <Typography variant='h5'>Breakfast</Typography>
          <Typography marginBottom={1} marginTop={1}>Is breakfast available to guests?</Typography>
         
      <FormControl size='small' sx={{width:{xs:230,sm:370,md:370,lg:370} }}>
        <InputLabel id="demo-simple-select-autowidth-label">No</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
        //   value={parking}
        //   onChange={handleChange}
          autoWidth
          label="Parking"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>Baryani + dink</MenuItem>
          <MenuItem value={21}>Chikken karahi</MenuItem>
          <MenuItem value={22}>Sabzi</MenuItem>
        </Select>
      </FormControl>
    
          </Item>
        </Grid>

{/* Languages Spoken section...*/}
        
          <Grid item xs={9}>
          <Item sx={{textAlign:'start',padding:2}}>
            <Typography  variant='h5'>Languages Spoken</Typography>
          <Typography
           marginTop={1}
           marginBottom={1}
           sx={{backgroundColor:'#eeeeee',padding:'4px',fontSize:12,width:{xs:230,sm:230,md:250}}}>
           What language do you and your staff speak?
          </Typography>
          
         
      <FormControl size='small' sx={{width:{xs:230,sm:370,md:370,lg:370}}}>
        <InputLabel id="demo-simple-select-autowidth-label">No</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
        //   value={parking}
        //   onChange={handleChange}
          autoWidth
          label="Parking"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>English</MenuItem>
          <MenuItem value={21}>Urdu</MenuItem>
          <MenuItem value={22}>Pashto</MenuItem>
        </Select>
      </FormControl> <br/><br/>
      <AddCircleIcon/><p>Add another language</p>
          </Item>
        </Grid>
                
{/* Facilities That Are Popular With Guests section...*/}
        
          <Grid item xs={9}>
          <Item sx={{textAlign:'start',padding:2}}>
            <Typography variant='h5'>Facilities That Are Popular With Guests</Typography>
          <Typography
           marginTop={1}
           marginBottom={1}
            sx={{backgroundColor:'#eeeeee',padding:'4px',fontSize:12,width:{xs:230,sm:230,md:430}}}>
                Guests look for these facilities the most when they're serching for properties.
                </Typography>
         <CheckboxLabels/>
          </Item>
        </Grid>        
      </Grid>
    </Box>
    <Button variant="contained" sx={{width:{xs:250,sm:580,md:780,lg:860} ,display:'flex',marginTop:1}}>Contained</Button>
    </Container>
    </>
  )
}

export default Facilities
