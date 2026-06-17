import React from 'react'
import './CardLogo.css'

const CardInput = () => {  
  return (
    <div className='MainCard'>
        <div className='card'>
            <h1>Login</h1>
            <div className='CardInput'>
              <input type="text" placeholder='Usuário' />
              <input type="password" placeholder='Senha' /> 
              <button>Logar</button>
            </div>
        </div>
    </div>
  )
}

export default CardInput  // 👈 MAIÚSCULA
