import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';

export default function CheckboxLabels() {
  return (
    <Box sx={{display:'flex'}}>
    <FormGroup sx={{width:425}}>
      <FormControlLabel control={<Checkbox />} label="Free WiFi" /><hr style={{width:'90%',border: '1px dashed'}}/>
      <FormControlLabel control={<Checkbox />} label="Bar" /><hr style={{width:'90%',border: '1px dashed'}}/>
      <FormControlLabel control={<Checkbox />} label="Sauna" /><hr style={{width:'90%',border: '1px dashed'}}/>
      <FormControlLabel control={<Checkbox />} label="Garden" /><hr style={{width:'90%',border: '1px dashed'}}/>
      <FormControlLabel control={<Checkbox />} label="Terrace" /><hr style={{width:'90%',border: '1px dashed'}}/>
    </FormGroup>
    <FormGroup sx={{width:425}}>
    <FormControlLabel control={<Checkbox />} label="Non-s,ooking rooms" /><hr style={{width:'90%',border: '1px dashed'}}/>
    <FormControlLabel control={<Checkbox />} label="Family rooms" /><hr style={{width:'90%',border: '1px dashed'}}/>
    <FormControlLabel control={<Checkbox />} label="Hot tub/jacuzzi" /><hr style={{width:'90%',border: '1px dashed'}}/>
    <FormControlLabel control={<Checkbox />} label="air conditioning" /><hr style={{width:'90%',border: '1px dashed'}}/>
    <FormControlLabel control={<Checkbox />} label="Swimming pool" /><hr style={{width:'90%',border: '1px dashed'}}/>
  </FormGroup>
  </Box>
  );
}
