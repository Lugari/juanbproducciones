import React from 'react';
import { Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SingleVideoCard from './pure/SingleVideoCard';
import { usePhotos } from '../usePhotos';

const theme = createTheme({
  typography: {
    fontFamily: 'Crimson Text, serif',
  },
});

const PhotosCardGrid = ({ title = 'Trabajos audiovisuales' }) => {
  const { photos, loading, error } = usePhotos();
  
  if (loading) return <div>Loading...</div>;
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

      <Grid container spacing={8} justifyContent="flex-start" p={8}>
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <SingleVideoCard contenType='img' url={photo.url} title={photo.title} description={photo.description} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PhotosCardGrid;