import { AddCircleOutline, RemoveCircle, RemoveCircleOutline } from "@mui/icons-material"
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material"
import { initialData } from "../../database/products"
import NextLink from 'next/link';
import { ItemCounter } from "../ui";
import { FC } from "react";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
    initialData.products[3],
]

interface Props{
    editable?: boolean;
}

export const CartList: FC<Props> = ({editable = false}) => {

    return (
        <>
            {
                productsInCart.map((product) => 
                    <Grid container spacing={2} key={product.slug} sx={{mb:1}}>
                        <Grid item xs={3} >
                            {/* TODO: LLEVAR A LA PAGINA DEL PRODUCTO */}
                            <NextLink href='/product/slug' passHref>
                                <Link>
                                    <CardActionArea>
                                        <CardMedia image={`/products/${product.images[0]}`} component='img' sx={{ borderRadius: '100%'}}/>
                                    </CardActionArea>
                                </Link>
                            </NextLink>
                        </Grid>
                        <Grid item xs={7} >
                            <Box display='flex' flexDirection='column'>
                                <Typography variant='body1'>{product.title}</Typography>
                                <Typography variant='body1'>Talla: <strong>M</strong></Typography>
                                {
                                    editable ?
                                    <ItemCounter/>
                                    :
                                    <Typography variant='body1'>Cantidad: <strong>3</strong></Typography>
                                }
                            </Box>

                            {
                                editable &&
                                <Button variant="text" color='error' sx={{mb:1}}>
                                    Remover
                                </Button>
                            }
                            
                        </Grid>
                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                            <Typography variant='subtitle1' sx={{mb:1}}>${product.price}</Typography>
                        </Grid>
                    </Grid>
                )
            }
        </>
  )
}
