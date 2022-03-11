import React, { FC } from 'react'
import { Card, Image } from '@nextui-org/react'
import { useRouter } from 'next/router';

interface Props {
    id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
    const router = useRouter();

    const onClick = (id: number) => {
        router.push(`/pokemons/${id}`)
    }

    return (
        <Card
            hoverable
            clickable
            css={{ backgroundColor: '#2d323f' }}
            onClick={() => onClick(id)}
        >
            <Card.Body>
                <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={200}
                    height={200}
                    alt={`Pokemon ${id}`}
                />
            </Card.Body>
        </Card>
    )
}
