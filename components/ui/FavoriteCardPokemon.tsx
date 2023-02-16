import { FC } from 'react'
import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'

export interface Props { pokeId: number }

export const FavoriteCardPokemon: FC< Props > = ({ pokeId }) => {

    const router = useRouter()

    const onFavoriteCicked = () => {
        router.push(`/pokemon/${ pokeId }`)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokeId} >
            <Card 
                isHoverable 
                isPressable
                onClick={ onFavoriteCicked } 
                css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
                    width={'100%'}
                    height={140} />
            </Card>
        </Grid>
    )
}
