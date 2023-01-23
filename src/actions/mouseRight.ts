import {mouse, right} from '@nut-tree/nut-js'

export const moveRight = async (distance: number) => {
  await mouse.move(right(distance))
}