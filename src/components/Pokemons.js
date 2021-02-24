import React from 'react'
import {pokemons} from '../mocks/pokemons.mock'
import Pokemon from './Pokemon'

export default function Pokemons(){
  return (
    <>
      {pokemons.map((pokemon,index)=>(
        <Pokemon pokemon={pokemon} index={index}></Pokemon>
      ))}
    </>
  )
}