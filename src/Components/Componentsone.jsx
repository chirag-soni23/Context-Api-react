import React, { useContext } from 'react'
import { Mycontext } from '../Context/data/Mycontext'

function Componentsone() {
    const context = useContext(Mycontext)
    const {name,roll_no} = context
    console.log(context);
  return (
    <div>
        Componentone
        <h2>{name}</h2>
        <h2>{roll_no}</h2>
        <hr></hr>
    </div>
  )
}

export default Componentsone