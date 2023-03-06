/* eslint-disable prettier/prettier */
import React from "react";

export default function modLibreriaIconos(iconos) {

    const Icono=(props)=> {
        const {name } = props        
        console.log(props)    
        const Icono = iconos[name]   
            return <Icono {...props} />       
      }

    return Icono
}
