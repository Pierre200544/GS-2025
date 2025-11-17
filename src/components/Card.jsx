import React from 'react'

export default function Card({ data, onOpen }) {
  return (
    <div
      onClick={() => onOpen(data)}
      className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow hover:scale-105 transition cursor-pointer"
    >
      <img
        src={data.foto}
        alt={data.nome}
        className="w-24 h-24 object-cover rounded-full mx-auto"
      />

      <h2 className="text-xl font-bold text-center mt-3">{data.nome}</h2>

      <p className="text-center text-gray-500 dark:text-gray-300 text-sm">{data.cargo}</p>

      <p className="text-center text-gray-400 dark:text-gray-400 text-xs mt-1">{data.localizacao}</p>
    </div>
  )
}
