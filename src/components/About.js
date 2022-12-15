import React from 'react'
import { useState } from 'react'

export default function About() {
    
    const [myStyle,setmyStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    })

    const [butText,setbutText] = useState("Enable Dark mode")

    const change = () =>{
        if(myStyle.color=='black'){
            setmyStyle({
                color : 'white',
                backgroundColor : 'black'
            })
            setbutText("Enable Light mode")
        }
        else if (myStyle.color=='white') {
            setmyStyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setbutText("Enable Dark mode")
        }

    }

  return (
    <div className='container mt-4' style={myStyle}>
      <h2>About</h2>
      <p className='mt-2'><b> This is a simple app made by Rahul</b></p>
      <button type="button" className='btn btn-info mt-1' onClick={change}>{butText}</button>
    </div>
  )
}
