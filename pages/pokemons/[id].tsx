import { useCallback, useRef, useState, useEffect } from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Card, Grid, Text, Row, Button, Image } from '@nextui-org/react';

import { pokeApi } from "../../api";
import { Layout } from '../../components/layouts';
import { PokemonResponse } from '../../interfaces/';
import localFavorites from '../../utils/localFavorites';
import confetti from 'canvas-confetti';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
    pokemon: PokemonResponse
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const onToggleFavorite = () => {
        localFavorites.toggleFavorites(pokemon.id);
        setIsFavorite(!isFavorite);
        if (isFavorite) return null;
        confetti({
            origin: {
                x: 1.1,
                y: 0
            },
            spread: 160,
            angle: -130,
            particleCount: 600,
            startVelocity: 120
        });
    }

    useEffect(() => {
        if (localFavorites.existsInFavorites(pokemon.id)) {
            setIsFavorite(true);
        }
    }, [])


    return (
        <Layout title={pokemon.name}>
            <Grid.Container gap={2} css={{ marginTop: '$4' }}>
                <Grid sm={4} xs={12}>
                    <Card hoverable css={{ backgroundColor: '#2d323f', padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={`${pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}`}
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid sm={8} xs={12}>
                    <Card css={{ backgroundColor: '#2d323f' }}>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform='capitalize'> {pokemon.name}</Text>
                            <Button
                                color='gradient'
                                ghost={isFavorite}
                                hidden
                                onClick={onToggleFavorite}
                            >
                                {
                                    isFavorite === true ? 'Quitar de favoritos' : 'Guardar en favoritos'
                                }
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text h3> Sprites: </Text>
                            <Row justify='space-between' css={{ marginTop: '18px' }}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    width={100}
                                    height={100}
                                />
                            </Row>
                        </Card.Body>
                    </Card>
                </Grid>

            </Grid.Container>
        </Layout>
    )
}

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((arr, i) => `${i + 1}`);

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    return {
        props: {
            pokemon: await getPokemonInfo(id)
        }
    }
}