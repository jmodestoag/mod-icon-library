/* eslint-disable prettier/prettier */
import modLibreriaIconos from './Icon'


import { ReactComponent as IconoNotificaciones } from './icons/notificaciones.svg'
import { ReactComponent as IconoTicketPlus } from './icons/ticketPlus.svg'
import { ReactComponent as IconoTicketPlusCircular } from './icons/ticketPlusCircular.svg'
import { ReactComponent as IconoChatRead } from './icons/chatRead.svg'
import { ReactComponent as IconoChatUnread } from './icons/chatUnread.svg'
import {ReactComponent as IconDelete} from './icons/deleteIcon.svg'

const iconos = {
  notificaciones: IconoNotificaciones,
  ticketPlus: IconoTicketPlus,
  ticketPlusCircular: IconoTicketPlusCircular,
  IconoChatUnread: IconoChatUnread,
  IconoChatRead: IconoChatRead,
  IconDelete: IconDelete
}

const Icon = modLibreriaIconos(iconos)

export default Icon
