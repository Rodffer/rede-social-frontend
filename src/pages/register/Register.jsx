import React from 'react';

import './register.css';

export default function Register() {
  return (
    <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Rede Social</h3>
          <span className="loginDesc">Encontre todos os seus amigos no mesmo lugar!</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder='Nome' type="email" className='loginInput' />
            <input placeholder='Email' type="email" className='loginInput' />
            <input placeholder='Senha' type="password" className='loginInput' />
            <input placeholder='Repetir Senha' type="password" className='loginInput' />
            <button className='loginButton' >Registrar-se</button>
            <button className='loginRegisterButton'>Fazer Login</button>
          </div>
        </div>
    </div>
  </div>
  )
}
