import { WebSocketServer } from 'ws'
import {handle} from './handlers/commandHandler'

const ws = new WebSocketServer({ port: 8080 })

console.log(`Server started on ws://localhost:${ws.options.port}/`)

ws.on('connection',(socket) => {

  socket.on('message',async (data) => {
    await handle(socket, data.toString())
  })
})

process.on('SIGINT', () => {
  ws.close()

  console.log('Program finished')
})