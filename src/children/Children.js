import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Checkbox, Stack, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Children = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item sx={{textAlign:'start',padding:1.5}}>
            <Typography variant='h4' margin={1}>Children</Typography>
            <Typography margin={1}>Can you accommodate children? (You can specify the ages and prices later)</Typography>
           
            <Stack spacing={2} direction="row" margin={1}>
                <Button variant="outlined" sx={{paddingRight:8}}><Checkbox />Yes</Button>
                <Button variant="outlined" sx={{paddingRight:8}}><Checkbox />No</Button>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Children


