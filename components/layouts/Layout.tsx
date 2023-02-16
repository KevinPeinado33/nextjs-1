import { FC, ReactNode } from 'react'

import Head from 'next/head'
import { NavBar } from '../ui/NavBar'

interface Props {
    children: ReactNode,
    title?  : string
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin

export const Layout: FC< Props > = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon app' }</title>
            <meta name='author' content='Kevin Peinado'/>
            <meta name='description' content={`Informacion sobre el pokemon ${ title }`} />
            <meta name='keywords' content={`${ title }, pokemon, pokedex`} />

            <meta property='og:title' content={`Información sobre ${ title }`} />
            <meta property='og:description' content={`Esta es la pagina sobre ${ title }`} />
            <meta property='og:image' content={`${ origin }/img/banner.jpg`} />

        </Head>

        <NavBar/>

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
