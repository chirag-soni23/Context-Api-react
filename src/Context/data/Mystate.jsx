import React from 'react'
import { Mycontext } from './Mycontext'
    const state = {
        name: "Chirag",
        roll_no:19,
        subject: "Programming"
    }

function Mystate(props) {
  return (
   <Mycontext.Provider value={state}>
    {props.children}
    </Mycontext.Provider>
  )
}

export default Mystate