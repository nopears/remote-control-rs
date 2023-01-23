import {moveUp} from '../actions/mouseUp'
import {moveRight} from '../actions/mouseRight'
import {moveLeft} from '../actions/mouseLeft'
import {moveDown} from '../actions/mouseDown'
import {WebSocket} from 'ws'
import {getPosition} from '../actions/mousePosition'
import {drawRect} from '../actions/drawRect'
import {drawCircle} from '../actions/drawCircle'

export const handle = async (ws: WebSocket, command: string) => {
  const [com, value, value2] = command.split(' ')
  switch (com) {
    case 'mouse_up':
      await moveUp(+value)
      ws.send(`mouse_up ${value}px`)
      break
    case 'mouse_down':
      await moveDown(+value)
      ws.send(`mouse_down ${value}px`)
      break
    case 'mouse_left':
      await moveLeft(+value)
      ws.send(`mouse_left ${value}px`)
      break
    case 'mouse_right':
      await moveRight(+value)
      ws.send(`mouse_right ${value}px`)
      break
    case 'mouse_position':
      ws.send(await getPosition())
      break
    case 'draw_rectangle':
      await drawRect(+value, +value2)
      ws.send(`draw_rectangle ${value}px, ${value2}px`)
      break
    case 'draw_square':
      await drawRect(+value, +value)
      ws.send(`draw_square ${value}px`)
      break
    case 'draw_circle':
      await drawCircle(+value)
      ws.send(`draw_circle ${value}px`)
      break
    default:
      ws.send('Unknown command')
  }
}