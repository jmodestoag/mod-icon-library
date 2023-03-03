/* eslint-disable prettier/prettier */
import modLibreriaIconos from './Icon'

import { ReactComponent as IconoNotificaciones } from './icons/notificaciones.svg'
import { ReactComponent as IconoTicketPlus } from './icons/ticketPlus.svg'

const iconos = {
  notificaciones: IconoNotificaciones,
  ticketPlus: IconoTicketPlus
}

const Icon = modLibreriaIconos(iconos)

export default Icon
