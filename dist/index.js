"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const commandHandler_1 = require("./handlers/commandHandler");
const ws = new ws_1.WebSocketServer({ port: 8080 });
console.log(`Server started on ws://localhost:${ws.options.port}/`);
ws.on('connection', (socket) => {
    socket.on('message', (data) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, commandHandler_1.handle)(socket, data.toString());
    }));
});
process.on('SIGINT', () => {
    ws.close();
    console.log('Program finished');
});
