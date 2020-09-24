import React, { useState } from 'react';
import './style.css';
import $ from "jquery";
import escrita from '../imagens/escrita.png';
import apple from '../imagens/applestore.png';
import facebook from '../imagens/facebook.png';
import android from '../imagens/googleplay.png';

import { Link } from 'react-router-dom';

export default function App() {

    const [login, set_login] = useState(''),
          [senha, set_senha] = useState(''),
          [msgErro, setMsgErro] = useState('');;

    function Login() {
        

        if (login != '' && senha != '') {

            if (login.length >= 3 && senha.length >= 3) {

                $.ajax({
                    url: "https://reqres.in/api/login",
                    type: "POST",
                    data: {
                        email: login,
                        password: senha
                    },
                    success: function (response) {
                        console.log(response);

                        if (response.token === "QpwL5tke4Pnpja7X4") {
                            console.log("Login Valido");
                            localStorage.setItem("acesso", true);
                            setMsgErro('');
                            window.location.href = "/feed"
                        } else {
                            alert("Login Inválido");
                            localStorage.setItem("acesso", false);
                        }
                    }
                });
            }
            else {
               setMsgErro('Login ou Senha com menos de 3 caracteres!!');
            }

        }
        else {
            setMsgErro('Login ou Senha vazia!!');
        }

    }


    return (
        <div>
            <title>Página de login</title>

            <div id="wrapper">
                <div id="insta" className="container">
                    <div className="celulares"></div>

                    <div className="top">
                        <form id="form" action="javascript:void(0);">
                            <div className="logo">
                                <img src={escrita} alt="instagram" />
                            </div>
                            <input type="text" value={login} onChange={(ev) => set_login(ev.target.value)} className="input" placeholder="Telefone, nome de usuário ou email" required />
                            <input type="password" value={senha} onChange={(ev) => set_senha(ev.target.value)} className="input" placeholder="Senha" required />
                            <button className="botao" onClick={Login}>Entrar</button>
                            <span className="separar">OU</span>
                            <Link to="/" className="facebook">
                                <div className="textoFB">
                                    <p><img src={facebook} alt="facebook" />
                                    Entrar com o Facebook
                                    </p>
                                </div>
                            </Link>
                            <span className="valid">{msgErro}</span>
                            <Link to="/" className="esqueceuSenha">Esqueceu a senha?</Link>
                        </form>
                        <div className="cadastrar">
                            Não tem uma conta? <Link to="/register" >Cadastre-se</Link>
                        </div>
                        <div className="obtenhaApp">
                            <span>Obtenha o aplicativo.</span>
                            <div className="download">
                                <img src={apple} alt="apple" />
                                <img src={android} alt="android" />
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <nav className="rodape">
                            <ul>
                                <li>
                                    <Link to="/">SOBRE</Link>
                                </li>
                                <li>
                                    <Link to="/">AJUDA</Link>
                                </li>
                                <li>
                                    <Link to="/">IMPRENSA</Link>
                                </li>
                                <li>
                                    <Link to="/">API</Link>
                                </li>
                                <li>
                                    <Link to="/">CARREIRAS</Link>
                                </li>
                                <li>
                                    <Link to="/">PRIVACIDADE</Link>
                                </li>
                                <li>
                                    <Link to="/">TERMOS</Link>
                                </li>
                                <li>
                                    <Link to="/">LOCALIZAÇÕES</Link>
                                </li>
                                <li>
                                    <Link to="/">CONTAS MAIS RELEVANTES</Link>
                                </li>
                                <li>
                                    <Link to="/">HASHTAGS</Link>
                                </li>
                                <li>
                                    <Link to="/">IDIOMA</Link>
                                </li>
                                <li className="copyright">
                                    &copy; 2020 INSTAGRAM DO FACEBOOK
                                </li>
                            </ul>
                        </nav>
                    </div>

                </footer>
            </div>
        </div>
    );
}
