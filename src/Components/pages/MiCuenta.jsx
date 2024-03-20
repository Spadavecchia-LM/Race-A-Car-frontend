import React from 'react';

const MiCuenta = ({ usuario }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('./assets/cuentaImage.jpg')] bg-cover">
      <div className="bg-primaryBlue overflow-hidden shadow rounded-lg border w-full sm:max-w-lg">
        <div className="border-t border-primaryGold px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-primaryGold">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-primaryGold">
                Nombre completo
              </dt>
              <dd className="mt-1 text-sm text-primaryWhite sm:mt-0 sm:col-span-2">
              {usuario.nombre} {usuario.apellido}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-primaryGold">
                Dirección de correo electrónico
              </dt>
              <dd className="mt-1 text-sm text-primaryWhite sm:mt-0 sm:col-span-2">
              {usuario.mail}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-primaryGold">
                Número de teléfono
              </dt>
              <dd className="mt-1 text-sm text-primaryWhite sm:mt-0 sm:col-span-2">
              {usuario.telefono}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-primaryGold">
                Documento
              </dt>
              <dd className="mt-1 text-sm text-primaryWhite sm:mt-0 sm:col-span-2">
                {usuario.documento}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default MiCuenta;