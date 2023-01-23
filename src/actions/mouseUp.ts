import {mouse, up} from '@nut-tree/nut-js'

export const moveUp = async (distance: number) => {
  await mouse.move(up(distance))
}