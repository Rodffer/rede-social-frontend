import React from 'react';

import './login.css';

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Rede Social</h3>
            <span className="loginDesc">Encontre todos os seus amigos no mesmo lugar!</span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder='Email' type="email" className='loginInput' />
              <input placeholder='Senha' type="password" className='loginInput' />
              <button className='loginButton' >Entrar</button>
              <span className="loginForgot">Esqueci minha senha</span>
              <button className='loginRegisterButton'>Registrar-se</button>
            </div>
          </div>
      </div>
    </div>
  );
}
