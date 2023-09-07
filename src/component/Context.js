import React, { createContext, useContext, useReducer } from 'react'


const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) =>{
    
}

const Context = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,[])
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
      

  )
}

export default Context
export const UseCart = () => useContext(CartStateContext)
export const Usedispatchcart = ()=>useContext(CartDispatchContext)