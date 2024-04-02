import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Politics() {
  return (
    <div className="mt-10 mb-10">
      <h2 className="text-primaryWhite text-center font-bold text-2xl underline mb-4">Políticas de Uso</h2>
      <Accordion className="w-[90%] mx-auto" itemClasses={{ title: 'text-primaryWhite' }} titleClasses={{ root: 'text-primaryWhite' }}>
        <AccordionItem className="text-primaryWhite" key="1" aria-label="Accordion 1" title="Política de Uso Responsable del Vehículo">
        Nos comprometemos a proporcionar vehículos de alta gama en óptimas condiciones para tu disfrute. Sin embargo, te recordamos que es tu responsabilidad utilizar el vehículo de manera responsable y acorde a las leyes de tránsito. Cualquier daño ocasionado por un uso inapropiado o negligente será responsabilidad del arrendatario.
        </AccordionItem>
        <AccordionItem className="text-primaryWhite" key="2" aria-label="Accordion 2" title="Política de Seguro y Cobertura">
        Todos nuestros vehículos están cubiertos por un seguro integral para tu tranquilidad y protección. Te ofrecemos diferentes opciones de cobertura para adaptarnos a tus necesidades. Es importante que revises y comprendas los términos de la póliza de seguro antes de confirmar tu reserva.
        </AccordionItem>
        <AccordionItem className="text-primaryWhite" key="3" aria-label="Accordion 3" title="Política de Mantenimiento y Limpieza">
        Nuestra prioridad es garantizar que cada vehículo esté en óptimas condiciones de funcionamiento y presentación. Antes de cada entrega, realizamos un exhaustivo proceso de limpieza y mantenimiento para asegurar que tu experiencia sea excepcional. Te pedimos que devuelvas el vehículo en las mismas condiciones en las que lo recibiste para evitar cargos adicionales.
        </AccordionItem>
      </Accordion>
    </div>
  );
}