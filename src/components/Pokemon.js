import React from 'react'

export default function Pokemon({pokemon,index}) {
  return (
    <div style={{
      border:'1px solid #123',
      padding: '8px'
    }}>
      <a href={pokemon.url}>
        El pokemon #{index} es {pokemon.name}
      </a>
    </div>
  )
}
