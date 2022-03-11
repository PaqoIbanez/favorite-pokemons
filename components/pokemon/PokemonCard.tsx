import { Grid, Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { SmallPokemon } from '../../interfaces'

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const { id, name, image } = pokemon;

    const router = useRouter();

    const onPokemonClick = () => {
        router.push(`/name/${name}`)
    }

    return (
        <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={id}>
            <Card hoverable clickable onClick={onPokemonClick} >
                <Card.Body css={{ p: 10, backgroundColor: '#161c28' }}>
                    <Card.Image
                        src={image}
                        width='100%'
                        height={130}
                        alt={name}
                    />
                </Card.Body>
                <Card.Footer
                    css={{
                        justify: 'flex-start',
                        backgroundColor: '#474c59'
                    }}
                >
                    <Row justify="space-between">
                        <Text css={{ textTransform: 'capitalize', fontSize: "20px" }}>
                            {name}
                        </Text>
                        <Text css={{ fontSize: "20px" }}>
                            #{id}
                        </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
