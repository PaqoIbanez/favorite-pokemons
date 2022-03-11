import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            height: 'calc(100vh - 100px)',
            flexDirection: 'column',
            justifyContent: 'center',
        }} >
            <Text h1> No hay favoritos</Text>
            <Image
                css={{ opacity: 0.5 }}
                width={300}
                height={300}
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/110.svg'
            />
        </Container>
    )
}
