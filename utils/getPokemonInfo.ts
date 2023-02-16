import { pokeApi } from '@/api'
import { Pokemon } from '@/interfaces'

export const getPokemonInfo = async ( nameOrId: string ) => {

    const { data } = await pokeApi
                            .get< Pokemon >(`/pokemon/${ nameOrId }`)

    const { id, name, sprites, ...restPokemon } = data

    return { 
        id, 
        name, 
        sprites 
    }

}
