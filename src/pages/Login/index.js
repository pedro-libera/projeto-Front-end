import React from 'react';
import facebookImg from '../../assets/images/facebook.png'
import googleImg from '../../assets/images/google.png'
import './styles.css';



function Login() {
    return (
        <React.Fragment>
            <div id="login-page">
                <div className="form-box">
                    <div className="form-title">
                        <h1>Login</h1>
                    </div>                    
                    <form>
                        <div className="input-block">
                            <label htmlFor="">
                                Usuário
                            </label>
                            <input type="text"/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="">
                                Senha
                            </label>
                            <input type="text"/>
                        </div>
                        <div className="checkbox-block">
                            <input type="checkbox"/>
                            <label htmlFor="">
                                Lembrar minha senha
                            </label>
                        </div>
                        <div className="button-block">
                            <button type="submit">Entrar</button>
                        </div>
                        <div className="forgot">
                            <a href="#">Esqueceu usuário/senha?</a>
                        </div>
                    </form>
                    <div className="login-others">
                        <div className="text">
                            <p>Ou entre com:</p>
                        </div>
                        <div className="links">
                            <a href="#">
                                <img src={facebookImg} alt="facebook"/>
                            </a>
                            <a href="#">
                                <img src={googleImg} alt="google"/>
                            </a>
                        </div>
                    </div>
                    <div className="register-redirect">
                        <p>Não é cadastrado?</p>
                        <a href="#">Cadastre-se aqui</a>
                    </div>
                </div>            
            </div>            
        </React.Fragment>
    )
}

export default Login;