import {mouse} from '@nut-tree/nut-js'

export const getPosition = async () => {
  const point = await mouse.getPosition()
  return `mouse_position {x: ${point.x}px} {y: ${point.y}px}`
}