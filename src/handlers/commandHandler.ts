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
      break
    case 'mouse_down':
      await moveDown(+value)
      break
    case 'mouse_left':
      await moveLeft(+value)
      break
    case 'mouse_right':
      await moveRight(+value)
      break
    case 'mouse_position':
      ws.send(await getPosition())
      break
    case 'draw_rectangle':
      await drawRect(+value, +value2)
      break
    case 'draw_square':
      await drawRect(+value, +value)
      break
    case 'draw_circle':
      await drawCircle(+value)
      break
  }
}