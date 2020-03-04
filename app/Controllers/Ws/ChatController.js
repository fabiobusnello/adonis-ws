'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage (message) {
    console.log('message', message)
    this.socket.broadcastToAll('message', message)
  }

  onClose () {
    console.log('closed')
    // same as: socket.on('close')
  }

  onError () {
    console.log("erro")
    // same as: socket.on('error')
  }
}

module.exports = ChatController
