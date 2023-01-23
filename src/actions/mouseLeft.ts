import {mouse, left} from '@nut-tree/nut-js'

export const moveLeft = async (distance: number) => {
  await mouse.move(left(distance))
}