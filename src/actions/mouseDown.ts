import {mouse, down} from '@nut-tree/nut-js'

export const moveDown = async (distance: number) => {
  await mouse.move(down(distance))
}