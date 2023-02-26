import { ShopLayout } from "../../components/layouts";
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link } from '@mui/material';
import { CartList, OrderSummary } from "../../components/cart";
import NextLink from 'next/link';

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden' pageDescription="Resumen de la orden">
        <Typography variant='h1' component='h1'>Resumen de la orden</Typography>

        <Grid container>
            <Grid item xs={12} sm={7}>
                {/* CartList */}
                <CartList/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2' component='h2'>Resumen (3 productos)</Typography>
                        <Divider sx={{my:1}}/>

                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Direccíon de entrega</Typography>
                            <NextLink href='/checkout/address' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        
                        <Typography>Daniel Ledezma</Typography>
                        <Typography>33 Lugar</Typography>
                        <Typography>Coatzintla</Typography>
                        <Typography>93160</Typography>
                        <Typography>Mexico</Typography>
                        <Typography>+52 3782373281</Typography>
                        
                        <Divider sx={{my:1}}/>

                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary/>
                        <Box sx={{mt:3 }}>
                            <Button color='secondary' className='circular-btn' fullWidth>
                                Confirmar orden
                            </Button>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    </ShopLayout>
  )
}

export default SummaryPage;