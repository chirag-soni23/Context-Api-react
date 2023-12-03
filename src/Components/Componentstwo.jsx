import React, { useContext } from 'react'
import { Mycontext } from '../Context/data/Mycontext'

function Componentstwo() {
    const context = useContext(Mycontext)
    const {name ,subject} = context
  return (
    <div>
        Componentstwo
        <h1>{name}</h1>
        <h1>{subject}</h1>

    </div>
  )
}

export default Componentstwo