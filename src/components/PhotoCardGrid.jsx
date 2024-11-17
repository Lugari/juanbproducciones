import React, {useState} from 'react';
import Grid from '@mui/material/Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { usePhotos } from '../usePhotos';


import { ImageList, ImageListItem, ImageListItemBar, Modal, Box, CircularProgress, IconButton, Typography } from '@mui/material';


import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';




const theme = createTheme({
  typography: {
    fontFamily: 'Crimson Text, serif',
  },
});



const PhotosCardGrid = ({ title = 'Trabajos audiovisuales' }) => {

  const { photos, loading, error } = usePhotos();
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentIndex(null);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length-1 : prevIndex -1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };
  
  if (loading) return <CircularProgress size="3rem" color='' sx={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    }}/>;
  if (error) return <div>{error}</div>;
  

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography 
          variant="h1" 
          sx={{ 
            color: 'white',
            fontFamily: 'Crimson Text, serif',
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
      </ThemeProvider>
      
      <ImageList variant="masonry" cols={1} gap={8}>
      <Grid container spacing={2} justifyContent="flex-start" p={8}>

      {photos.map((photo, index) => (
        <Grid size={{xs:12, sm:6, md:4, lg:3}} key={photo.id}>
          <ImageListItem key={photo.id} onClick={() => handleOpen(index)}>
            <img src={photo.url} alt={photo.title} loading='lazy' style={{ cursor: 'pointer'}}/>
            <ImageListItemBar
            title={photo.title}
            subtitle={photo.description}/>
          </ImageListItem>
        </Grid>
        ))}
        <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2,
            outline: 'none',
            maxWidth: '90%',
            maxHeight: '90%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
          }}
        >

        {/* Flecha izquierda */}
        
        
        {photos[currentIndex] && (
            <ImageListItem>
              <img
                src={photos[currentIndex].url}
                alt={photos[currentIndex].description}
                style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }}
              />
              <ImageListItemBar
                title={photos[currentIndex].title}
                subtitle={photos[currentIndex].description}/>
              
            </ImageListItem>
          )}
          <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 16, color:'#c3c3c3'}}>
            <ArrowBackIos />
          </IconButton>

          {/* Flecha derecha */}
          <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 16, color: '#c3c3c3' }}>
            <ArrowForwardIos />
          </IconButton>
          
        </Box>
      </Modal>
      </Grid>
      </ImageList>

        {/* Modal para la visualización ampliada de la imagen */}

    </div>
  );
};

export default PhotosCardGrid;