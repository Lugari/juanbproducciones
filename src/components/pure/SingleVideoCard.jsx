import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const SingleVideoCard = ({ contentType, url, title, description }) => {
  return (
    <Card>
      <CardActionArea>
        {contentType === 'video' ? (
                <CardMedia
                  component="video"
                  height="360"
                  src={url}
                  controls
                />
              ) : (
                <CardMedia
                  component="img"
                  sx={{ 
                    objectFit: 'scale-down',
                    objectPosition: 'top',
                    }}
                  image={url}
                  alt={title}
                />
              )}
        <CardContent>
          <Typography variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="h6" component="div">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SingleVideoCard;
