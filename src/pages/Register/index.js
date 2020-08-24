import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Register() {
    return (
        <React.Fragment>
            <div id="register-page">
                <div className="form-box">
                    <div className="title">
                        <h1>Register</h1>
                    </div>
                    <form action="">
                        <div className="input-block">
                            <label htmlFor="">
                                Nome completo
                            </label>
                            <input type="text" />
                        </div>
                        <div className="input-block">
                            <label htmlFor="">
                                E-mail
                            </label>
                            <input type="text" />
                        </div>
                        <div className="input-block">
                            <label htmlFor="">
                                Senha
                            </label>
                            <input type="text" />
                        </div>
                        <div className="input-block">
                            <label htmlFor="">
                                Confirme a senha
                            </label>
                            <input type="text" />
                        </div>
                        <div className="checkbox-block">
                            <input type="checkbox" />
                            <label htmlFor="">
                                Eu aceito os <a href="#">termos de uso</a> e <a href="#">políticas de privacidade</a>
                            </label>
                        </div>
                        <div className="button-block">
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                    <div className="login-redirect">
                        <p>Ja é cadastrado?</p>
                        <Link to="/login">Faça seu login aqui</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register;