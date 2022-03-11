import { FC } from 'react';
import { Grid } from '@nextui-org/react'

import { FavoriteCardPokemon } from './';

interface Props {
    pokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
    return (
        <>
            {
                pokemons.map((id) => (
                    <Grid xs={6} sm={4} md={3} lg={2} xl={2} key={id} >
                        <FavoriteCardPokemon id={id} key={id} />
                    </Grid>
                ))
            }
        </>

    )
}
