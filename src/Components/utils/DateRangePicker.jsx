import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { es } from 'date-fns/locale/es';
import { GlobalContext } from "../../context/AppContext";
registerLocale('es', es)

const DateRangePicker  = ({ disabledDates}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const {dispatch} = useContext(GlobalContext)

  useEffect(() => {
    dispatch({type:"SET_INICIO_RESERVA", payload: startDate})
    dispatch({type:"SET_FIN_RESERVA", payload: endDate})
  },[endDate, startDate])

  return (
    <>

      <div className="flex gap-5 justify-center mt-5 flex-wrap">
      <div className="flex flex-col">
      <label htmlFor="recogida" className="text-primaryWhite text-center">fecha de recogida</label>
    <DatePicker
    id="recogida"
    dateFormat="dd/MM/yyyy"
    isClearable={true}
    showIcon
    inline
      locale="es"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      startDate={startDate}
      endDate={endDate}
      minDate={new Date()}
      excludeDates={disabledDates}
    />
      </div>
      
      <div className="flex flex-col">
      <label htmlFor="entrega" className="text-primaryWhite text-center">fecha de entrega</label>
      <DatePicker
    dateFormat="dd/MM/yyyy"
      id="entrega"
    inline
    isClearable={true}
    showIcon
    locale="es"
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      startDate={startDate}
      endDate={endDate}
      minDate={startDate}
      excludeDates={disabledDates}
    />
      </div>
  </div>

  

    </>
  
  )
}

export default DateRangePicker 