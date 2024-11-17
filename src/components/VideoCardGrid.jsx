import React, {useState} from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SingleVideoCard from './pure/SingleVideoCard';
import { useVideos } from '../useVideos';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


const theme = createTheme({
  typography: {
    fontFamily: 'Crimson Text, serif',
  },
});

const VideoCardGrid = ({ title = 'Trabajos audiovisuales' }) => {
  const { videos, loading, error } = useVideos();
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpen = (video) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  }
  
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

      <Grid container spacing={2} justifyContent="flex-start" p={8}>
        {videos.map((video) => (
          <Grid size={{sm:12, md:6, lg:4}} key={video.id} onClick={()=>handleOpen(video)}>
            <SingleVideoCard url={video.preview} title={video.title} description={video.description} style={{cursor:'pointer'}}  />
          </Grid>
        ))}
        

      </Grid>
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
        {selectedVideo && (

            <SingleVideoCard contentType="video" url={selectedVideo.url} title={selectedVideo.title} description={selectedVideo.description}/>

          )}
        </Box>
        </Modal>
    </div>
  );
};

export default VideoCardGrid;