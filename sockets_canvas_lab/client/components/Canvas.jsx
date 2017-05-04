import React from 'react'

class Canvas extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      canvas: null,
      context:  null
    }
  }

  drawRectangle(event){
    this.state.context.fillStyle = 'red'
    this.state.context.fillRect(event.x, event.y, 10, 10)
  }

  componentDidMount(){
    const canvas = document.querySelector('canvas')
    const context = canvas.getContext('2d')
    this.setState({canvas: canvas, context: context})
  }

  render(){
    return (
      <div>
        <canvas width = "500" height = "500"></canvas>
      </div>
    )
  }

}

export default Canvas