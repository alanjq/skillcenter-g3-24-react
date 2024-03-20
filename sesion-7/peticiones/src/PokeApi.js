// https://pokeapi.co/
import { URL_POKEAPI } from './API'
import { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

export default function PokeApi() {
    // Lista de pokemons, se selecciona uno para ver la información del pokemon
    const [pokelist, setPokelist] = useState()
    // Objeto con la información completa
    const [pokemonInfo, setPokemonInfo] = useState()
    // El nombre hace que cambie la información mostrada
    const [pokemonName, setPokemonName] = useState('')

    useEffect(() => {
        // Pokelist
        fetch(URL_POKEAPI('pokemon/'))
            .then((response) => response.json())
            .then((json) => json.results)
            .then((json) => setPokelist(json))
    }, [])

    useEffect(() => {
        fetch(URL_POKEAPI(`pokemon/${pokemonName}`))
            .then((response) => response.json())
            .then(setPokemonInfo)
    }, [pokemonName])

    return (
        <main>
            <div>
                {pokelist && pokelist.map((item, k) => <div key={k} onClick={() => setPokemonName(item.name)}>
                    {item.name}
                </div>)}
            </div>

            {pokemonInfo && <Pokemon {...pokemonInfo} />}
        </main>
    )
}
