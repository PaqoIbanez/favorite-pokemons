import { useState, useEffect } from 'react';

import { Grid } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { NoFavorites } from '../../components/ui';
import localFavorites from "../../utils/localFavorites";
import { FavoritePokemons } from "../../components/pokemon";

export default function FavoritosPage() {

    const [pokemons, setPokemons] = useState<number[]>([]);



    useEffect(() => {
        const pokemons = localFavorites.favoritesList();
        setPokemons(pokemons);
    }, []);

    return (
        <Layout title="Favoritos">
            <Grid.Container gap={2}>
                {
                    pokemons.length == 0 ?
                        (
                            <NoFavorites />
                        ) :
                        (
                            <FavoritePokemons pokemons={ pokemons } />
                        )
                }
            </Grid.Container>
        </Layout>
    )
}