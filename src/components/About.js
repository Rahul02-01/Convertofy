import React from 'react'

export default function About(props) {
    
    

  return (
    <div className={`container mt-4 bg-${props.mode} border border-${props.mode==='light'?'dark':'light'} border-2 rounded`}>
      <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>About</h2>
      <p className={`mt-2 text-${props.mode==='light'?'dark':'light'}`}><b> This is a simple app made by Rahul</b></p>
    </div>
  )
}
