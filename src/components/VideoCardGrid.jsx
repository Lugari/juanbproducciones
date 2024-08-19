import React from 'react';
import { Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SingleVideoCard from './pure/SingleVideoCard';
import { useVideos } from '../useVideos';

const theme = createTheme({
  typography: {
    fontFamily: 'Crimson Text, serif',
  },
});

const VideoCardGrid = ({ title = 'Trabajos audiovisuales' }) => {
  const { videos, loading, error } = useVideos();
  
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
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} key={video.id}>
            <SingleVideoCard contentType="video" url={video.url} title={video.title} description={video.description} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VideoCardGrid;