import React, { useState } from 'react';

const Politics = () => {
  // Estado para controlar qué filas están desplegadas
  const [expandedRows, setExpandedRows] = useState([]);

  // Función para manejar el clic en una fila
  const handleRowClick = (index) => {
    // Clonar el estado actual de filas expandidas
    const newExpandedRows = [...expandedRows];
    // Toggle: si el índice está en el array, lo elimina; si no está, lo añade
    if (newExpandedRows.includes(index)) {
      newExpandedRows.splice(newExpandedRows.indexOf(index), 1);
    } else {
      newExpandedRows.push(index);
    }
    // Actualizar el estado
    setExpandedRows(newExpandedRows);
  };

  // Datos de políticas
  const policies = [
    { title: 'Política 1', description: 'Descripción de la política 1.' },
    { title: 'Política 2', description: 'Descripción de la política 2.' },
    { title: 'Política 3', description: 'Descripción de la política 3.' },
    { title: 'Política 4', description: 'Descripción de la política 4.' },
    { title: 'Política 5', description: 'Descripción de la política 5.' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-primaryBlue">
      <div className="bg-white overflow-hidden shadow rounded-lg border w-full sm:w-96">
        {policies.map((policy, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            {/* Cabecera de la fila */}
            <div
              className="cursor-pointer font-bold"
              style={{
                textDecoration: expandedRows.includes(index) ? 'underline' : 'none',
                color: expandedRows.includes(index) ? '#FFD700' : 'inherit',
                padding: '10px',
              }}
              onClick={() => handleRowClick(index)}
            >
              {policy.title}
            </div>
            {/* Descripción (desplegable si la fila está expandida) */}
            {expandedRows.includes(index) && (
              <div className="ml-10">{policy.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Politics;