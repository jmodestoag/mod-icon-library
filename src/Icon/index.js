/* eslint-disable prettier/prettier */
import React from "react";

export default function modLibreriaIconos(iconos) {

    const Icono=(props)=> {
        const {name} = props
        console.log(props)
        const IconoSvg = iconos[name]
        return <IconoSvg />
      }

    return Icono
}