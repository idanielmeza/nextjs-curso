import { ShopLayout } from "../../components/layouts";
import { Box, Card, CardContent, Divider, Grid, Typography, Link, Chip } from '@mui/material';
import { CartList, OrderSummary } from "../../components/cart";
import NextLink from 'next/link';
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";

const OrderPage = () => {
  return (
    <ShopLayout title='Orden 32112321' pageDescription="Resumen de la orden">
        <Typography variant='h1' component='h1'>Orden ASD23211</Typography>
        
        {/* <Chip
            sx={{my:2}}
            label='Pendiente de pago'
            variant='outlined'
            color='error'
            icon={<CreditCardOffOutlined/>}
        /> */}

        <Chip
            sx={{my:2}}
            label='Pagado'
            variant='outlined'
            color='success'
            icon={<CreditScoreOutlined/>}
        />

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
                            {/* TODO */}
                            <h1>Pagr</h1>
                            <Chip
                                sx={{my:2}}
                                label='Pagado'
                                variant='outlined'
                                color='success'
                                icon={<CreditScoreOutlined/>}
                            />
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    </ShopLayout>
  )
}

export default OrderPage;