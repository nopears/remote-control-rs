import {Button, down, left, mouse, right, up} from '@nut-tree/nut-js'

export const drawRect = async (x: number, y: number) => {
  await mouse.pressButton(Button.LEFT)
  await mouse.move(down(y))
  await mouse.move(left(x))
  await mouse.move(up(y))
  await mouse.move(right(x))
  await mouse.releaseButton(Button.LEFT)
}