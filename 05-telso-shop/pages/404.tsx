import { ShopLayout } from "../components/layouts"
import { Box, Typography } from '@mui/material';

const Custom404 = () => {
    return (
        <ShopLayout title='Page not found' pageDescription="Pagina no encontrada">
            <Box display='flex' sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }} justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
                <Typography variant='h1' fontSize={80} fontWeight={200}>404 | </Typography>
                <Typography marginLeft={2}>Pagina no encontrada </Typography>

            </Box>
        </ShopLayout>
    )
}

export default Custom404