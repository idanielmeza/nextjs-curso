import { useState } from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { ParsedUrlQuery } from 'querystring';

import conffeti from 'canvas-confetti';

import pokeApi from '../../api/pokeApi'
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces'

import { getPokemonInfo, localFavorites } from '../../utils';

interface Props {
    pokemon: Pokemon
}

interface Params extends ParsedUrlQuery {
    id: string
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const [inFavorites, setInFavorites] = useState(localFavorites.isFavorite(pokemon.id))

    const onToggleFavorite = ()=>{
        localFavorites.toggleFavorite(pokemon.id);
        setInFavorites(!inFavorites);

        if(!inFavorites){
            conffeti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin:{
                    x: 1,
                    y: 0
                }
            })
        }
    }


    return (
        <Layout title={`Pokemon ${pokemon.name} `}>
            
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card isHoverable css={{padding:'30px'}}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width='100%'
                                height='200px'
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button
                                onPress={onToggleFavorite}
                                color='gradient'
                                ghost={ !inFavorites }
                            >
                                {inFavorites ? 'Remove from favorites' : 'Add to favorites'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites: </Text>
                            <Container direction='row' display='flex'>
                                <Image 
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image 
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image 
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image 
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>

            </Grid.Container>

        </Layout>
    )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151: string[] = [...Array(151)].map((value,i) => `${i+1}`)

    return {
        paths: pokemons151.map(id => ({ params: { id } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const { id } = params as {id: string};

    return {
        props: {
            pokemon: await getPokemonInfo(id)
        },
    };
};

export default PokemonPage