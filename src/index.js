import modLibreriaIconos from './Icon'

import ticketPlusCircularIcon from './icons/ticketPlusCircularIcon'
import ticketPlusIcon from './icons/TicketPlusIcon'
import notificacionesIcon from './icons/notificacionesIcon'
import chatReadIcon from './icons/chatReadIcon'
import chatUnreadIcon from './icons/chatUnreadIcon'
import deleteIcon from './icons/deleteIcon'


const iconos = {
  notificacionesIcon: notificacionesIcon,
  ticketPlusIcon: ticketPlusIcon,
  ticketPlusCircularIcon: ticketPlusCircularIcon,
  chatReadIcon: chatReadIcon,
  chatUnreadIcon: chatUnreadIcon,
  deleteIcon: deleteIcon,
}

const Icon = modLibreriaIconos(iconos)

export default Icon
