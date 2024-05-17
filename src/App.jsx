import { useEffect, useRef, useState } from 'react'
import Components from './Component'
import './App.css'


function App() {

  
  const [mycolor , setcolor] = useState("black")
  const [mywidth , setWidth] = useState(8)
  const [myopacity , setOpacity] = useState(0.5)
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const [isDraw , setIsDraw] = useState(false)

  useEffect(()=>{
   const canvas = canvasRef.current
   const ctx = canvas.getContext("2d")
   ctx.lineCap = "square"
  //  ctx.lineJoine = "bevel"
   ctx.strokeStyle = mycolor
   ctx.lineWidth = mywidth
   ctxRef.current = ctx
  },[mycolor , mywidth])

  const drawStart = (e)=>{
    const ctx = ctxRef.current
    ctx.globalAlpha = myopacity
    ctxRef.current.beginPath()
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY,
    )
    setIsDraw(true)
  }

  const endDraw = (e)=>{
    ctxRef.current.closePath()
    setIsDraw(false)
  }

  const draw = (e)=>{
    if(!isDraw){
      return
    }
    const ctx = ctxRef.current
    ctx.globalAlpha = myopacity
    ctxRef.current.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY,
    )
    ctxRef.current.stroke()
  }
  
  return (
    <>
      <h1 className='main-head'>Drawing App</h1>
      <div className="insertion">
       <Components  
        color = {setcolor}
        width = {setWidth}
        opacity = {setOpacity}
        />
      </div>
       
      <div className='App'>
        <div className='drawingArea'>
       
        <canvas
        ref={canvasRef}
        width="1500px"
        height="580px"
        onMouseDown={drawStart}
        onMouseUp={endDraw}
        onMouseMove={draw}
        
        >

        </canvas>
        </div>
      </div>
    </>
  )
}

export default App
