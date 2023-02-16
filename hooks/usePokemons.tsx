import { useState } from 'react'
import confetti from 'canvas-confetti'

import { localFavorites } from '@/utils'
import { Pokemon } from '@/interfaces'

interface Props { pokemon: Pokemon }

export const usePokemons = ({ pokemon }: Props) => {

    const [isInFavorites, setIsInFavorites] = useState( localFavorites.existInFavorites( pokemon.id ) )

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite( pokemon.id )
        setIsInFavorites( !isInFavorites )

        if ( !isInFavorites ) return

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        })

    }

    return {
        isInFavorites,
        onToggleFavorite
    }
    
}
