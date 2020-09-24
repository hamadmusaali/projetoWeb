import React, { useState } from 'react';
import '../Home/style.css';
import $ from "jquery";
import escrita from '../imagens/escrita.png';
import apple from '../imagens/applestore.png';
import android from '../imagens/googleplay.png';

import { Link } from 'react-router-dom';


export default function Reg() {

    const [nome, set_nome] = useState(''),
          [senha, set_senha] = useState(''),
          [senha2, set_senha2] = useState(''),
          [msgErro, setMsgErro] = useState('');

    function Cadastrar() {

        if (nome !== '' && senha !== '' && senha2 !== '') {

            if (nome.length >= 3 && senha.length >= 3 && senha2.length) {

                if (senha === senha2) {

                    var auxRegistro = {
                        email: nome,
                        password: senha
                    }

                    $.ajax({
                        url: "https://reqres.in/api/register",
                        type: "POST",
                        data: auxRegistro,
                        success: function (response) {
                            console.log(response);
                            setMsgErro('');
                            localStorage.setItem("registro", "Cadastrado com sucesso");
                            window.location.href = "/"
                        }
                    });
                    localStorage.setItem("registro", "");
                }
                else {
                    setMsgErro('As senhas não são iguais!!');
                }
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

        <div id="wrapper">
            <div id="direita" className="container">
                <div className="top">
                    <form action="javascript:void(0);">
                        <div className="logo">
                            <img src={escrita} alt="instagram" />
                        </div>
                        <input value={nome} className="input" type="text" onChange={(ev) => set_nome(ev.target.value)} placeholder="Email" required></input>
                        <input value={senha} className="input" type="password" onChange={(ev) => set_senha(ev.target.value)} placeholder="Senha" required></input>
                        <input value={senha2} className="input" type="password" onChange={(ev) => set_senha2(ev.target.value)} placeholder="Confirma senha" required></input>
                        <button id="btn" className="botao" onClick={Cadastrar}>Cadastrar</button>
                        <span className="valid">{msgErro}</span>
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
