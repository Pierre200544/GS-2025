import React, { useState } from "react";

export default function Modal({ data, onClose }) {
  const [showRecommend, setShowRecommend] = useState(false);
  const [showChat, setShowChat] = useState(false);

  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-xl w-full p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        {/* Cabeçalho */}
        <div className="flex gap-4 items-center">
          <img
            src={data.foto}
            alt={data.nome}
            className="w-28 h-28 rounded-full object-cover border"
          />

          <div>
            <h2 className="text-2xl font-bold dark:text-white">{data.nome}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {data.cargo} • {data.localizacao}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{data.resumo}</p>
          </div>
        </div>

        <hr className="my-4 border-gray-300 dark:border-gray-700" />

        {/* Habilidades */}
        <h3 className="font-semibold text-lg dark:text-white">Habilidades Técnicas</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {data.habilidadesTecnicas.map((s, i) => (
            <span
              key={i}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded-full text-xs"
            >
              {s}
            </span>
          ))}
        </div>

        <h3 className="font-semibold text-lg mt-4 dark:text-white">Soft Skills</h3>
        <ul className="list-disc ml-5 text-sm dark:text-gray-300">
          {data.softSkills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        {/* Botões */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setShowRecommend(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Recomendar profissional
          </button>

          <button
            onClick={() => setShowChat(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Enviar mensagem
          </button>
        </div>

        {/* POPUP de Recomendação */}
        {showRecommend && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-96 shadow-xl">
              <h2 className="text-xl font-bold mb-3 dark:text-white">
                Recomendar {data.nome}
              </h2>
              <textarea
                className="w-full p-2 rounded-lg border dark:bg-gray-800 dark:text-white"
                rows="4"
                placeholder="Escreva sua recomendação..."
              />
              <div className="flex justify-end mt-4 gap-2">
                <button
                  onClick={() => setShowRecommend(false)}
                  className="px-4 py-2 bg-gray-400 rounded-lg text-white"
                >
                  Cancelar
                </button>
                <button className="px-4 py-2 bg-green-600 rounded-lg text-white">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* POPUP de Chat */}
        {showChat && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-96 shadow-xl flex flex-col">
              <h2 className="text-xl font-bold mb-3 dark:text-white">
                Conversa com {data.nome}
              </h2>

              <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mb-3 h-48 overflow-y-auto">
                <p className="text-gray-600 dark:text-gray-300 text-sm">Chat iniciado...</p>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
                  placeholder="Digite sua mensagem..."
                />
                <button className="px-4 py-2 bg-blue-600 rounded-lg text-white">
                  Enviar
                </button>
              </div>

              <button
                onClick={() => setShowChat(false)}
                className="mt-4 bg-gray-500 text-white py-2 rounded-lg"
              >
                Fechar chat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
