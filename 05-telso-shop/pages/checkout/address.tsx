import { Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { ShopLayout } from "../../components/layouts"

const AdressPage = () => (
    <ShopLayout title='Direccíon' pageDescription="Dirección de envío">
        <Typography variant='h1' component='h1'>Dirección</Typography>

        <Grid container spacing={2} sx={{mt:2}}>
            <Grid item xs={12} sm={6}>
                <TextField label='Nombre' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Apellido' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Nombre' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Direccíon' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Direccíon 2 (opcional)' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Código Postal' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Ciudad' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <Select variant='filled' label='País' value={1}>
                        <MenuItem value={1}>Mexico</MenuItem>
                        <MenuItem value={2}>Estados Unidos</MenuItem>
                        <MenuItem value={3}>Canada</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Teléfono' variant='filled' fullWidth />
            </Grid>
        </Grid>

        <Box sx={{mt:5}} display='flex' justifyContent='end'>
            <Button color='secondary' className='circular-btn' size='large'>
                Revisar orden
            </Button>
        </Box>
    </ShopLayout>
)

export default AdressPage