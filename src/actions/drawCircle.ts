import {Button, mouse, Point, straightTo} from '@nut-tree/nut-js'

export const drawCircle = async (radius: number) => {
  const startPoint = await mouse.getPosition()
  const points: Point[] = []
  for (let i = 0; i<360; i++) {
    const x = Math.cos(2 * Math.PI * i / 360) * radius + 0.5 + startPoint.x
    const y = Math.sin(2 * Math.PI * i / 360) * radius + 0.5 + startPoint.y
    points.push(new Point(x, y))
  }
  await mouse.move(straightTo(points[0]))
  await mouse.pressButton(Button.LEFT)
  await mouse.move(points)
  await mouse.releaseButton(Button.LEFT)
}