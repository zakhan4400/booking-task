import { Link, Button, Container, Typography, MenuItem, InputLabel, Select, FormControl,Box} from '@mui/material'
import React from 'react'
import BedIcon from '@mui/icons-material/Bed';
import ListItemText from '@mui/material/ListItemText';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LayoutPricing = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
    <Container >
         <Typography variant='h4' textAlign="left" fontWeight="bold">Layout & Pricing</Typography>
         <Typography variant='h7' sx={{float:'left'}}> Describ the bed option. common spaces, size, and pricing for each of your apartment.</Typography>
<br/><br/>
        <div style={{backgroundColor:'white',padding:1,width:900}}>
            
            <div style={{backgroundColor:'white',justifyContent:'center'}}>
                <div style={{ padding:10}}>     
                <BedIcon sx={{fontSize:80, color:'lightgray',marginBottom:2}}/>
                <br/>
                <h6 style={{marginBottom:20}}>You haven't shared any layout and pricing info. Start setting these for <br/>each of your apartment.</h6>
                <Button variant="contained" sx={{fontFamily:'serif',textTransform:'none',borderRadius:0, paddingX:4,paddingY:1.4}}>Set layout and price</Button>
                <ListItemText sx={{justifyContent:'center'}}secondary="for 23, Hangu"/>
                </div>
            </div> 
        </div>   
    </Container>
    <br/><br/><br/><br/>
<footer style={{backgroundColor:'#fafbfd'}}>
  <Row>
  <Col  xs={7} style={{padding:10,textAlign:'start'}}>
    <Link href="#" underline="none" sx={{marginLeft:13,marginRight:2}}>About Us</Link>
    <Link href="#" underline="none" sx={{marginRight:2}}>Privacy & Cookie Statement</Link>
    <Link href="#" underline="none" sx={{marginRight:2}}>FAQs</Link></Col>

  <Col xs={2} style={{padding:10,backgroundColor:'greenyellow'}}>
  <Box sx={{ minWidth: 120}}>
  <Typography sx={{fontSize:15}}>Your Language:</Typography>
      <FormControl size='small' fullWidth >
       
        <InputLabel id="demo-simple-select-label">English Us</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Pashto</MenuItem>
          <MenuItem value={20}>Urdu</MenuItem>
          <MenuItem value={30}>English Us</MenuItem>
        </Select>
      </FormControl>
    </Box></Col>

  <Col style={{padding:10,textAlign:'start',backgroundColor:'yellowgreen'}}>© Copyright Booking.com</Col>
  </Row>
    </footer>
   </>
  )
}

export default LayoutPricing
