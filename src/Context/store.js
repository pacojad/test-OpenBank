import React, { useState, createContext } from 'react'

export const StoreContext = createContext(null)

export default ({ children }) => {
  
  const [passState, setPassState] = useState(
    {
      wizard: false, // Modal status
      active: 1, // Step number
      result: '' // Result submit
    }
  )
  
  // Open Modal
  const open = () => {
    setPassState({...passState, wizard: true});
  }

  // Close Modal
  const close = () => {
    setPassState({...passState, wizard: false, active: 1, result: ''});
  }

  // Go next step
  const nextStep = () => {
    setPassState({...passState, active: passState.active + 1})
  }

  // Go step 1
  const initStep = () => {
    setPassState({...passState, active: 1})
  }

  // Go result step
  const resultPass = ( bool ) => {
    setPassState({...passState, result: bool, active: 3})
  }

  const store = {
    password: [passState, setPassState],
    open,
    close,
    nextStep,
    initStep,
    resultPass 
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}