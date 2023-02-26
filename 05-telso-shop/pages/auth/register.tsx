import { Box, Button, Grid, TextField, Typography, Link } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../../components/layouts'
import NextLink from 'next/link';

const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
        <Box sx={{width:350, padding:'10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component='h1'>Crear cuenta</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Nombres' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Apellido Paterno' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Apellido Materno (opcional)' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Correo' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Contraseña' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Button  color='secondary' className='circle-btn' size='large' fullWidth>Registrarse</Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                    <NextLink href='/auth/login' passHref>
                        <Link underline='always'>
                            Iniciar sesión
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage;