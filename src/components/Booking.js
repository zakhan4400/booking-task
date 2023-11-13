import { Container,Typography,Button} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import HotelIcon from '@mui/icons-material/Hotel';
import MuseumIcon from '@mui/icons-material/Museum';

const Item = styled(Paper)(({ theme }) => ({
  justifyItems:'flex-start',
  textAlign: 'center',
}));

const useStyles = makeStyles({
  field:{
    textAlign:'left',
    color:'dark',
    backgroundColor:'white'
}
})

function Booking() {
  const classes = useStyles();

  
  return (
    <div>
    <Container className={classes.field} fixed sx={{backgroundColor:'#c7c3c3'}}>
      <Typography variant='h6' sx={{marginLeft:10, color:'#535454'}} > List your property on Booking.com and start welcoming huests in no time! </Typography>
      <br/>
      <Typography   sx={{marginLeft:10, fontSize:15, color:'#7c7d7d' }}> To get started, select the type of property you want to list on Booking.com </Typography>
      
      {/* <Grid  sx={{margin:2}}>
      <Grid >
        <Grid container justifyContent="center" >
          {[0, 1, 2, 3].map((value) => (
            <Grid>
              <Paper sx={{height: 200, width: 220,marginRight:3 }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid> */}

        <Grid sx={{margin:2}}>
          <Grid >
            <Grid container justifyContent="center">
              <Item  sx={{marginTop:{md:2,sm:2,xs:2}, height: 240 , width: 220,marginRight:3,position: 'relative' }}>
               <ApartmentIcon color='primary' sx={{marginTop:3, fontSize:45,}}/><br/>
                <Typography variant='h7' fontWeight='bold'>Apartment</Typography>
                <Typography sx={{fontSize:11, padding:2, paddingTop:1}}>Furnished and self-catring accommodations where guests rent the entire place.</Typography>
                <Button sx={{position:'absolute',bottom: 22, left:20, width: 180,fontSize:10,textTransform:'none'}}  variant="contained" >List your property</Button>

                </Item>

                <Item sx={{marginTop:{md:2,sm:2,xs:2},height: 240, width: 220,marginRight:3,position: 'relative' }}>
               <HomeIcon color='primary' sx={{marginTop:3, fontSize:45}}/><br/>
                <Typography variant='h7' fontWeight='bold'>Homes</Typography>
                <Typography sx={{fontSize:11, padding:2, paddingTop:1}}>Properties like apartments, vacation homes, villas, etc.</Typography>
                <Button sx={{position:'absolute',bottom: 22, left:20, width: 180,fontSize:10,textTransform:'none'}} variant="contained">List your property</Button>

                </Item>
                <Item sx={{marginTop:{sm:2,md:0,xs:2},height: 240, width: 220, marginRight:3, position: 'relative' }}>
               <HotelIcon color='primary' sx={{marginTop:3, fontSize:45}}/><br/>
                <Typography variant='h7' fontWeight='bold'>Hotel, B&Bs & More</Typography>
                <Typography sx={{fontSize:11, padding:2, paddingTop:1}}>Properties like hotels, B&Bs, guest house, hotels, condo hotels, etc.</Typography>
                <Button sx={{position:'absolute',bottom: 22, left:20, width: 180,fontSize:10,textTransform:'none'}} variant="contained">List your property</Button>

                </Item>
                <Item sx={{marginTop:{lg:0,md:2,sm:2,xs:2},height: 240, width: 220,marginRight:3,position: 'relative' }} >
               <MuseumIcon color='primary' sx={{marginTop:3, fontSize:45}}/><br/>
                <Typography variant='h7' fontWeight='bold'>Alternative Places</Typography>
                <Typography sx={{fontSize:11, padding:2, paddingTop:1}}>Properties like boats, campground, luxury tents, etc.</Typography>
                <Button  sx={{position:'absolute',bottom: 22, left:20, width: 180,fontSize:10,textTransform:'none'}} variant="contained">List your property</Button>

                </Item>
              
            </Grid>
          </Grid>
        </Grid>
    </Container>
    </div>
  );
}

export default Booking;
