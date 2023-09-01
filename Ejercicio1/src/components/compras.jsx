import React, {useEffect, useState} from 'react'

function useDatos() {
    const [elementos, setElementos] = useState([])
    
   
    useEffect(() => {
      fetch("elementos.json")
        .then(response => response.json())
        .then(datos => {
          setElementos(datos)
        })
    }, [])
   
    return elementos
  }

  export default function Datos() {
 
    const elementos = useDatos()
   
    return (
        <select className="form-select" aria-label="Default select example"name="todo" >
                <option selected>Agregar elemento</option>
                <option value={elementos}>{elementos} </option>
                <option value="Polloㅤㅤ$4.00">Pollo</option>
                <option value="Cerealㅤㅤ$1.25">Cereal</option>
                <option value="Sodaㅤㅤ$2.00">Soda</option>
                <option value="Lecheㅤㅤ$1.75">Leche</option>
                <option value="Mayonesaㅤㅤ$0.50">Mayonesa</option>
                <option value="Pastaㅤㅤ$0.50">Pasta</option>
                <option value="Salsaㅤㅤ$0.50">Salsa</option>
                <option value="Embutidosㅤㅤ$1.00">Embutidos</option>
                <option value="Quesoㅤㅤ$1.75">Queso</option>
            </select> 
    )
  }