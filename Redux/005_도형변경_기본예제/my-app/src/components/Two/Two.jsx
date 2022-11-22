import React from 'react'
import './two.css'

export default function Two(borderRadius) {
    console.log('two')
    console.log(borderRadius)
    return (
      <div className='two' style={borderRadius}>Two</div>
    )
  }
