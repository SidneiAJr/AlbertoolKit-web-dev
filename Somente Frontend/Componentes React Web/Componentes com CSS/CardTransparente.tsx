import React from 'react'
import './CardTransparente.css'

const CardTransparente = () => {
  return (
    <div className='MainCard'>
        <div className='Card'>
           <img  src="https://img.icons8.com/ios/50/password--v1.png" alt="password--v1" className='loginicone'/>
           <h1>CardTransparente</h1>
           <input type="text"  placeholder='Informação 1'/>
           <input type="text" placeholder='Informação 1'/>
           <button><img src="https://img.icons8.com/ios/50/login-rounded-right--v1.png" alt="login-rounded-right--v1" className='icone'/>Logar</button>
        </div>
    </div>
  )
}

export default CardTransparente
