import React from 'react'
import './MenuTop.css'

export default function MenuTop() {
  return (
    <div>
      <nav className='menu'>
        <a href="/">Home</a>
        <a href="/sobre">Sobre</a>
        <a href="/servicos">Serviços</a>
        <a href="/portfolio">Portfólio</a>
        <a href="/contato">Contato</a>
        <a href="/blog">Blog</a>
        <a href="/suporte">Suporte</a>
      </nav>
    </div>
  )
}
