import React from 'react';
import '../Home/style.css';
import $ from "jquery";
import escrita from '../imagens/escrita.png';
import apple from '../imagens/applestore.png';
import android from '../imagens/googleplay.png';

import { Link } from 'react-router-dom';

function Cadastrar() {
    var nome = document.getElementById('nome_cad'),
        senha = document.getElementById('senha_cad'),
        senha1 = document.getElementById('senha1_cad'),
        msgSenha = document.getElementById('msgSenha'),
        msgCaracteres = document.getElementById('msgCaracteres'),
        msgSenhasIguais = document.getElementById('msgSenhasIguais');

    if (nome.value != '' && senha.value != '' && senha1.value != '') {

        if (nome.value.length >= 3 && senha.value.length >= 3 && senha1.value.length) {

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
                        window.location.href = "/"
                    }
                });
            }
            else {
                msgSenha.style.display = "none";
                msgCaracteres.style.display = "none";
                msgSenhasIguais.style.display = "block";
            }
        }
        else {
            msgSenha.style.display = "none";
            msgCaracteres.style.display = "block";
            msgSenhasIguais.style.display = "none";
        }
    }
    else {
        msgSenha.style.display = "block";
        msgCaracteres.style.display = "none";
        msgSenhasIguais.style.display = "none";
    }

}

function Reg() {

    return (

        <div id="wrapper">
            <div id="direita" className="container">
                <div className="top">
                    <form action="javascript:void(0);">
                        <div className="logo">
                            <img src={escrita} alt="instagram" />
                        </div>
                        <input id="nome_cad" className="input" type="text" placeholder="Email" required></input>
                        <input id="senha_cad" className="input" type="password" placeholder="Senha" required></input>
                        <input id="senha1_cad" className="input" type="password" placeholder="Confirma senha" required></input>
                        <button id="btn" className="botao" onClick={Cadastrar}>Cadastrar</button>
                        <div id="msgCaracteres">
                            <p className="valid">Login ou Senha com menos de 3 caracteres!!</p>
                        </div>
                        <div id="msgSenha">
                            <p className="valid">Login ou Senha vazia!!</p>
                        </div>
                        <div id="msgSenhasIguais">
                            <p className="valid">As senhas não são iguais!!</p>
                        </div>
                    </form>
                    <div className="cadastrar">
                        Já tem uma conta? <Link to="/" >Conecte-se</Link>
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
    );
}
export default Reg;
