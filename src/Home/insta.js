import React from 'react';
import './style.css';
import $ from "jquery";
import escrita from '../imagens/escrita.png';
import apple from '../imagens/applestore.png';
import facebook from '../imagens/facebook.png';
import android from '../imagens/googleplay.png';

import { Link } from 'react-router-dom';

function Login() {
    var login = document.getElementById('login'),
        senha = document.getElementById('senha');

    if (login.value != '' && senha.value != '') {

        if (login.value.length >= 3 && senha.value.length >= 3 ) {

            $.ajax({
                url: "https://reqres.in/api/login",
                type: "POST",
                data: {
                    email: login.value,
                    password: senha.value
                },
                success: function (response) {
                    console.log(response);
        
                    if (response.token === "QpwL5tke4Pnpja7X4") {
                        console.log("Login Valido");
                        localStorage.setItem("acesso", true);
                        window.location.href = "/feed";
                    } else {
                        alert("Login Inválido");
                        localStorage.setItem("acesso", false);
                    }
                }
            });
        }
        else
            alert('Login ou Senha com menos de 3 caracteres!!')
        
    }
    else
        alert('Login ou Senha vazia!!');
    
}

function App() {

    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width = device-width, initial-scale=1.0" />
            <title>Página de login</title>


            <div id="wrapper">
                <div id="insta" className="container">
                    <div className="celulares"></div>

                    <div className="top">
                        <form id="form" action="javascript:void(0);">
                            <div className="logo">
                                <img src={escrita} alt="instagram" />
                            </div>
                            <input id="login" type="text" className="input" placeholder="Telefone, nome de usuário ou email" required/>
                            <input id="senha" type="password" className="input" placeholder="Senha" required/>
                            <Link to="/" className="botao" onClick={Login}>Entrar</Link>
                            <span className="separar">OU</span>
                            <Link to="/" className="facebook">
                                <div className="textoFB">
                                    <p><img src={facebook} alt="facebook" />
                                Entrar com o Facebook
                                </p>
                                </div>
                            </Link>
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
export default App;