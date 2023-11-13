import React from 'react'
import { Container,Typography,Button, ButtonGroup} from '@mui/material';
import './Book.css';
import { experimentalStyled as styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ApartmentIcon from '@mui/icons-material/Apartment';

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

const Book = () => {
    const classes = useStyles();

  return (
    <div>
         <Container className={classes.field} >
            <Grid lg={3}>
              <Item sx={{height: 450 , width: 450 }}>
                <Typography sx={{marginTop:5}}>You're listing</Typography>
               <ApartmentIcon color='primary' sx={{marginTop:3,marginBottom:3, fontSize:70,}}/><br/>
                <Typography variant='h5' fontWeight='bold' sx={{marginRight:5,marginLeft:5}}>One apartments where guest can book the entire place </Typography>
                <Typography sx={{fontSize:15,marginTop:9,}}>Does this sound like your property?</Typography>
                <ButtonGroup size="small" aria-label="small button group" sx={{marginTop:3}}>
                <Button variant="contained" sx={{fontSize:15,textTransform:'none',height:40, width:410}}>Continue</Button>
                </ButtonGroup><br/><br/>
                <ButtonGroup color="secondary" aria-label="medium secondary button group">
                <Button variant="outlined" sx={{fontSize:15,textTransform:'none',height:40, width:410, borderColor:'blue', color:'blue'}}>No, I need to make a change</Button>
                </ButtonGroup>
            </Item>
          </Grid>
    </Container>
    </div>
  )
}

export default Book
