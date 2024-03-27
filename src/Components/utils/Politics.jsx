import React, { useState } from 'react';
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";

const Politics = () => {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleRowClick = (index) => {
    // Clonar el estado actual de filas expandidas
    const newExpandedRows = [...expandedRows];
    // Verificar si el índice está en el array
    const indexPosition = newExpandedRows.indexOf(index);
    // Si la fila ya está expandida, la elimina; de lo contrario, la agrega
    if (indexPosition !== -1) {
      newExpandedRows.splice(indexPosition, 1);
    } else {
      newExpandedRows.push(index);
    }
    // Actualizar el estado
    setExpandedRows(newExpandedRows);
  };

  const policies = [
    { title: 'Política 1', description: 'Descripción de la política 1.' },
    { title: 'Política 2', description: 'Descripción de la política 2.' },
    { title: 'Política 3', description: 'Descripción de la política 3.' },
  ];

  return (
    <div className="w-full bg-secondaryBlue text-primaryWhite">
      <h2 className="text-center font-bold text-2xl underline mb-4">Políticas de Uso</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {policies.map((policy, index) => (
          <div key={index} className="border rounded-lg p-4 cursor-pointer" onClick={() => handleRowClick(index)}>
            <div className='flex justify-between items-center'>
              <h3 className="text-lg font-bold">{policy.title}</h3>
              {expandedRows.includes(index) ? <FaRegMinusSquare /> : <FaRegPlusSquare />}
            </div>
            {expandedRows.includes(index) && <p className="mt-2">{policy.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Politics;