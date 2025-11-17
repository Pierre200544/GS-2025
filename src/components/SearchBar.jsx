import React from 'react'

export default function SearchBar({ search, setSearch }){
  return (
    <input
      type="text"
      placeholder="Buscar por área, cidade ou habilidade..."
      className="w-full p-3 rounded-xl border dark:bg-gray-800 dark:text-white"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}
