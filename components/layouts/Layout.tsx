import { FC } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
    title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    console.log(origin);
    
    return (
        <>
            <Head>
                <title>{capitalize(title || '') || 'Pokemon App'}</title>
                <meta name='author' content='Francisco Javier Ibanez Canales' />
                <meta name='description' content={`Informacion sobre el pokemon ${title}`} />
                <meta name='keywords' content={`${title}, pokemon, pokedex`} />
                <meta property="og:title" content={`Pokemon - ${title}`} />
                <meta property="og:description" content={`Informacion de ${title}`} />
                <meta property="og:image" content={`${origin}/pokemon.jpg`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}

const capitalize = (name: string) => {
    const capName: string = name.charAt(0).toUpperCase() + name.slice(1);
    return capName;
}