import React, { useState } from 'react'
import profiles from '../data/profiles.json'
import Card from '../components/Card'
import Modal from '../components/Modal'
import SearchBar from '../components/SearchBar'

export default function Home(){
  const [modalData, setModalData] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = profiles.filter((p) => {
    const hay = (p.area + ' ' + p.localizacao + ' ' + p.habilidadesTecnicas.join(' ') + ' ' + p.nome + ' ' + p.cargo).toLowerCase()
    return hay.includes(search.toLowerCase())
  })

  return (
    <div className="p-6 min-h-screen dark:bg-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profissionais</h1>
        <div className="flex gap-3 items-center">
          <button onClick={() => document.documentElement.classList.toggle('dark')} className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white">Dark Mode</button>
        </div>
      </div>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filtered.map(p => <Card key={p.id} data={p} onOpen={setModalData} />)}
      </div>

      <Modal data={modalData} onClose={() => setModalData(null)} />
    </div>
  )
}
