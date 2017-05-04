import React from 'react'

class Canvas extends React.Component {

  constructor(props){
    super(props)
    this.canvas = null
    this.context = null
    this.state = {
    }
  }

  drawRectangle(event){
    
    console.log('clicked')
    console.log(event.clientX)
    // console.log({event.target.value}.x)
    this.context.fillStyle = 'red'
    this.context.fillRect(event.clientX, event.clientY, 10, 10)
  
  }

  componentDidMount(){
    this.canvas = document.querySelector('canvas')
    this.context = this.canvas.getContext('2d')
    // this.setState({canvas: canvas, context: context})
  }

  render(){
    return (
      <div>
        <canvas width = "500" height = "500" onClick={this.drawRectangle.bind(this)} ></canvas>
      </div>
    )
  }

}

export default Canvas