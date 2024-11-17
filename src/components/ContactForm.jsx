import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { Box, Button, TextField, Typography } from '@mui/material';

const validationSchema = yup.object().shape({
  name: yup.string().min(3, 'El nombre debe tener al menos 3 caracteres').required('El nombre es obligatorio'),
  email: yup.string().email('Debe ser un correo válido').required('El correo es obligatorio'),
  message: yup.string().min(10, 'El mensaje debe tener al menos 10 caracteres').required('El mensaje es obligatorio'),
});

const ContactForm = () => {
  const initialValues = { name: '', email: '', message: '' };

  const handleSubmit = (values, { resetForm }) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    emailjs
      .send('service_tx8gllt', 'template_nhw9u3b', templateParams, 'u2-YEd9oZMOfHd3yA')
      .then(() => {
        alert('Mensaje enviado con éxito');
        resetForm();
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Error al enviar el mensaje, inténtelo de nuevo.');
      });
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
      <Box sx={{ width: { xs: '100%', sm: '500px' }, bgcolor: '#ffffff', padding: 4, borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" align="center" gutterBottom>Formulario de Contacto</Typography>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Box mb={3}>
                <Field as={TextField} fullWidth label="Nombre" name="name" variant="outlined" helperText={<ErrorMessage name="name" />} />
              </Box>
              <Box mb={3}>
                <Field as={TextField} fullWidth label="Correo" name="email" type="email" variant="outlined" helperText={<ErrorMessage name="email" />} />
              </Box>
              <Box mb={3}>
                <Field as={TextField} fullWidth label="Mensaje" name="message" multiline rows={4} variant="outlined" helperText={<ErrorMessage name="message" />} />
              </Box>
              <Box display="flex" justifyContent="center">
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default ContactForm;
