import React from 'react';
import './style.css';
import $ from "jquery";
import escrita from './imagens/escrita.png';
import apple from './imagens/applestore.png';
import facebook from './imagens/facebook.png';
import android from './imagens/googleplay.png';

import { Link } from 'react-router-dom';

function Cadastrar() {
    var nome = document.getElementById('nome_cad'),
        senha = document.getElementById('senha_cad'),
        senha1 = document.getElementById('senha1_cad'),
        insta = document.getElementById("insta"),
        cad = document.getElementById("cad");

    if (senha.value === senha1.value) {
        var auxRegistro = {
            email: nome.value,
            password: senha.value
        }


        $.ajax({
            url: "https://reqres.in/api/register",
            type: "POST",
            data: auxRegistro,
            success: function (response) {
                console.log(response);
            }
        });

        var data = JSON.parse(localStorage.getItem("dadosCli"));
        if (data == null) {
            localStorage.setItem("dadosCli", "[]");
            data = [];
        }
        data.push(auxRegistro);
        localStorage.setItem("dadosCli", JSON.stringify(data));
    }
    else {
        alert("Senhas não correspondem");
    }
    insta.style.display = "block";
    cad.style.display = "none";
}

function Login() {
    var login = document.getElementById('login'),
        senha = document.getElementById('senha');

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
                alert("Login Valido");
            } else {
                alert("Login Inválido");
            }
        }
    });
}

function controlaCad() {
    var cad = document.getElementById("cad"),
        insta = document.getElementById("insta");
    cad.style.display = "block";
    insta.style.display = "none";
}

function controlaLog() {
    var cad = document.getElementById("cad"),
        insta = document.getElementById("insta");
    cad.style.display = "none";
    insta.style.display = "block";
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
                    <form action="javascript:void(0);">
                        <div className="logo">
                            <img src={escrita} alt="instagram" />
                        </div>
                        <input id="login" type="text" className="input" placeholder="Telefone, nome de usuário ou email" />
                        <input id="senha" type="password" className="input" placeholder="Senha" />
                        <Link to="/feed" className="botao" onClick={Login}>Entrar</Link>
                        <span className="separar">OU</span>
                        <a href="#" className="facebook">
                            <div className="textoFB">
                                <p><img src={facebook} />
                                Entrar com o Facebook
                                </p>
                            </div>
                        </a>
                        <a href="#" className="esqueceuSenha">Esqueceu a senha?</a>
                    </form>
                    <div className="cadastrar">
                        Não tem uma conta? <a onClick={controlaCad}>Cadastre-se</a>
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
            <div className="cad">
                <div id="cad" className="container">
                    <div className="top">
                        
                        <form action="javascript:void(0);">
                            <div className="logo">
                                <img src={escrita} alt="instagram" />
                            </div>
                            <input id="nome_cad" className="input" type="text" placeholder="email"></input>
                            <input id="senha_cad" className="input" type="password" placeholder="senha"></input>
                            <input id="senha1_cad" className="input" type="password" placeholder="confirma senha"></input>
                            <button id="btn" className="botao" onClick={Cadastrar}>Cadastrar</button>
                        </form>
                        <div className="cadastrar">
                            Já tem uma conta? <a onClick={controlaLog}>Conecte-se</a>
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
            </div>
            <footer>
                <div className="container">
                    <nav className="rodape">
                        <ul>
                            <li>
                                <a href="#">SOBRE</a>
                            </li>
                            <li>
                                <a href="#">AJUDA</a>
                            </li>
                            <li>
                                <a href="#">IMPRENSA</a>
                            </li>
                            <li>
                                <a href="#">API</a>
                            </li>
                            <li>
                                <a href="#">CARREIRAS</a>
                            </li>
                            <li>
                                <a href="#">PRIVACIDADE</a>
                            </li>
                            <li>
                                <a href="#">TERMOS</a>
                            </li>
                            <li>
                                <a href="#">LOCALIZAÇÕES</a>
                            </li>
                            <li>
                                <a href="#">CONTAS MAIS RELEVANTES</a>
                            </li>
                            <li>
                                <a href="#">HASHTAGS</a>
                            </li>
                            <li>
                                <a href="#">IDIOMA</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="copyright">
                    &copy; 2020 INSTAGRAM DO FACEBOOK
                </div>
            </footer>
        </div>
    </div>
    );
}
export default App;