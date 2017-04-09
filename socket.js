/* Socket interface: (how to use)
  import Socket from './socket.js';

  let socket = new Socket();
  socket.emit('channel add', channel); // message sent to server
  socket.on('channel add', addChannelFunc); // message received from server

  EventEmitter(from nodejs): provide nice pattern for event based message passing.

  let ee = new EventEmitter();
  ee.on('channel add', addChannel); // add a event listener(subscribe)
  function addChannel(channel) {...}
  ee.emit('channel add', message); // send message
* */

import {EventEmitter} from 'events';

class Socket {
  constructor(ws = new WebSocket(), ee = EventEmitter()){
    this.ws = ws;
    this.ee = ee;

    ws.onmessage = this.message.bind(this);
    ws.onopen = this.open.bind(this);
    ws.onclose = this.close.bind(this);
  }

  on(name, fn){
    this.ee.on(name, fn);
  }

  off(name, fn){
    this.ee.removeListener(name, fn);
  }

  emit(name, data){
    const message = JSON.stringify({name, data});
    this.ws.send(message);
  }

  message(e){
    try{
      const message = JSON.parse(e.data);
      // !!! NOTE: compare the previous diff to make sure the difference between ee.emit and socket.emit
      // ee.on adds all event listeners
      // ee.emit uses the event name to find the corresponding listener and trigger the callback function
      // socket.emit sends the message to WebSocket server
      this.ee.emit(message.name, message.data);
    }
    catch(err){
      this.ee.emit('error', err);
    }
  }

  open(){
    this.ee.emit('connect');
  }

  close(){
    this.ee.emit('disconnect');
  }
}

export default Socket;
