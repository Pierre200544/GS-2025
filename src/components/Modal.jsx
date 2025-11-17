import React from 'react'

export default function Modal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 dark:text-gray-200">X</button>
        <div className="flex gap-4">
          <img src={data.foto} alt={data.nome} className="w-28 h-28 rounded-full object-cover" />
          <div>
            <h2 className="text-2xl font-bold mb-1">{data.nome}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{data.cargo} • {data.localizacao}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">{data.resumo}</p>
          </div>
        </div>

        <hr className="my-4" />
        <h3 className="font-semibold">Habilidades Técnicas</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {data.habilidadesTecnicas.map((s,i) => <span key={i} className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full">{s}</span>)}
        </div>

        <h3 className="font-semibold mt-4">Soft Skills</h3>
        <ul className="list-disc ml-6 text-sm">
          {data.softSkills.map((s,i) => <li key={i}>{s}</li>)}
        </ul>

        <div className="flex justify-between mt-6">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Recomendar profissional</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Enviar mensagem</button>
        </div>
      </div>
    </div>
  )
}
