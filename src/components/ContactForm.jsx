import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Paper,
  Grid,
} from '@mui/material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado', formData);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Container maxWidth="md" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center'}}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
              <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4, fontFamily:'Crimson Text' }}>
                Contacto
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  type="email"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Mensaje"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ minWidth: '200px' }}
                  >
                    Enviar
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;