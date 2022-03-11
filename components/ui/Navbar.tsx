import Image from "next/image"
import NextLink from 'next/link';
import { Spacer, Text, Link } from '@nextui-org/react';

export const Navbar = () => {

    return (
        <div style={{
            display: "flex",
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: '#161c28'
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
                width={70}
                height={70}
                alt="icono de la app"
            />
            <NextLink href="/" passHref>
                <Link >
                    <Text color="white" h2>P</Text>
                    <Text h3>okémon </Text>
                </Link>
            </NextLink>
            <Spacer css={{ flex: 1 }} />
            <NextLink href="/favoritos" passHref>
                <Link >
                    <Text color="white" >Favoritos</Text>
                </Link>
            </NextLink>
        </div>
    )
}
