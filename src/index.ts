import { WebSocketServer } from 'ws'
import {handle} from './handlers/commandHandler'

const ws = new WebSocketServer({ port: 8080 })

ws.on('connection',(socket) => {

  socket.on('message',async (data) => {
    await handle(socket, data.toString())
  })
})
