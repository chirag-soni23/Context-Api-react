import React from 'react'
import Componentsone from './Components/Componentsone'
import Componentstwo from './Components/Componentstwo'
import Mystate from './Context/data/Mystate'

function App() {
  return (
    <Mystate>
        <Componentsone/>
        <Componentstwo/>
    </Mystate>
  )
}

export default App;