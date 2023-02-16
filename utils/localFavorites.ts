const STORAGE_FAVORITES = 'favorites'

const toggleFavorite = ( id: number ) => {

    let favorites: number [] = pokemons()

    if ( favorites.includes( id ) ) {
        favorites = favorites.filter( pokeId => pokeId !== id )
    } else {
        favorites.push( id )
    } 

    localStorage.setItem( STORAGE_FAVORITES, JSON.stringify( favorites ) )

}

const existInFavorites = ( id: number ): boolean => {

    if ( typeof window === 'undefined' ) return false 

    const favorites: number[] = pokemons()

    return favorites.includes( id )

}

const pokemons = (): number [] => {
    return JSON.parse( localStorage.getItem( STORAGE_FAVORITES ) || '[]' )
}

export default { 
    toggleFavorite, 
    existInFavorites, 
    pokemons 
}
