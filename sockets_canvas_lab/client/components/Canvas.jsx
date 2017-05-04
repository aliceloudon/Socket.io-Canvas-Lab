import React from 'react'
import io from 'socket.io-client'

class Canvas extends React.Component {

  constructor(props){
    super(props)
    this.canvas = null
    this.context = null
    this.socket =  io("http://localhost:3000/")
    this.socket.on('draw', this.addCoords.bind(this))
    this.state = {
    coordsArray: []
   }
  }

  addCoords(coords){
    console.log(coords)
    var coordsArray = this.state.coordsArray
    let newCoords = [coords, ...coordsArray]
    this.drawRectangle(coords.x, coords.y)
    this.setState({coordsArray: newCoords})
  }

  emitCoords(coords){
    event.preventDefault();
    this.socket.emit('draw', coords)
  }

  handleClick(event){
    var getX = event.clientX
    var getY = event.clientY
    this.drawRectangle(getX, getY)
    const coords = {x: getX, y: getY}
    this.emitCoords(coords)
  }

  drawRectangle(x,y){
    this.context.fillStyle = 'red'
    this.context.fillRect(x, y, 10, 10)
  }

  componentDidMount(){
    this.canvas = document.querySelector('canvas')
    this.context = this.canvas.getContext('2d')
    // this.setState({canvas: canvas, context: context})
  }

  render(){
    return (
      <div>
        <canvas  width = "500" height = "500" onClick={this.handleClick.bind(this)} ></canvas>
      </div>
    )
  }

}

export default Canvas