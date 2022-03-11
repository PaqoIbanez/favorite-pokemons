import { NextPage } from 'next';
import { GetStaticProps } from 'next'

import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonsListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Listado de pokemons'>
      <Grid.Container gap={1} justify="flex-start">
        {
          pokemons.map((pokemon, i) => (
            <PokemonCard pokemon={pokemon} key={i} />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonsListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((result, i) => ({
    ...result,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;