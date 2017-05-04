import React from 'react'
import Canvas from '../components/Canvas'
import io from 'socket.io-client'

class CanvasContainer extends React.Component {

constructor(props){
super(props)
this.socket =  io("https://localhost:3000")
this.socket.on('draw', this.addMessage.bind(this))
this.state = {
  messages: []
 }
}

addMessage(message){
  var messages = this.state.messages
  let newMessages = [message, ...messages]
  this.setState({messages: newMessages})
}

EmitDrawing(event){
  event.preventDefault();
  let newRectangle = {}
  this.socket.emit('draw', )
}

render(){
return(
  <div>
    <Canvas />
  </div>
)
}
}

export default CanvasContainer