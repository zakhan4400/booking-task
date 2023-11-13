import { Typography,Container,Button } from '@mui/material'
import React, {useState}from 'react'
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const PropertyPhotos = () => {

    const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const imageURL = URL.createObjectURL(file);
    setImageUrl(imageURL);
  };

  const handleUpload = () => {
    if (selectedImage) {
      console.log('Selected Image:', selectedImage);
    } else {
      console.log('Please select an image first.');
    }
  };
  return (
    <Container >
         <Typography variant='h4' textAlign="left" fontWeight="bold"> Property Photos</Typography>
         <Typography variant='h7' sx={{textAlign:'left'}}>Great photos invite to guests to get the full experience of  your property. so upload some high-resulotion photos that represent all your property has to offer. We'll display there these photos on your property's page on the Booking.com website.</Typography>
<br/><br/>
        <div style={{backgroundColor:'white', width:900,padding:15}}>
            <h3 style={{textAlign:'left',margin:0}}>Photo Gallery</h3>
            <div style={{backgroundColor:'white',justifyContent:'center'}}>
                <div style={{borderStyle:'dashed', padding:30}}>
                <h3>Upload at least 1 photo</h3>
                <h6 style={{marginBottom:20}}>You'll also be able to upload more after registration</h6>
                <h4 style={{margin:0}}>Drag and drop your photos here</h4>
                <p style={{margin:0}}>or</p>
                <input type="file" accept="image/*" onChange={handleImageUpload} />

                <Button variant="contained" onClick={handleUpload} sx={{textTransform:'none',width:150,borderRadius:0}}><InsertPhotoIcon/>Add photos</Button>
                {imageUrl && (
        <div>
          <h2>Selected Image</h2>
          <img src={imageUrl} alt="Selected" width="200" />
        </div>
      )}
                </div>
                <div style={{textAlign:'left',backgroundColor:'#FEF5D8',marginTop:10, padding:30}}>
                <h3>No professional photos? No problem.</h3><br/>
                <h6><ChevronRightIcon/> You can use: <StayCurrentPortraitIcon/>A smartphone    <CameraAltIcon/>A digital camera</h6>
                <h6><ChevronRightIcon/>Tip! Guests! love photos! Here are some tips to help you take great photos of your property: </h6>
                <h6><ChevronRightIcon/>If you don't know who took a photo, it's best to avoid using it. Only use photos which you took or own the copyright to. or if it was taken by someone else, make sure you have the photographer's consent to use the photo.  </h6>
                </div>
                
            </div>
            
        </div>
        <div style={{textAlign:'left'}}>
        <Button variant="contained" sx={{marginTop:1,width:900,alignItems:'start', borderRadius:0}}>Contained</Button>

        </div>
    </Container>
  )
}
export default PropertyPhotos
