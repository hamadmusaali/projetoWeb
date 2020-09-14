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
        senha1 = document.getElementById('senha1_cad');

    if(senha.value === senha1.value) {
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
    }
    else {
        alert("Senhas não correspondem");
    }
    
}

function Reg(){
    return(
        <div id="cad" className="container">
            <div className="top">
                <form action="javascript:void(0);">
                    <div className="logo">
                        <img src={escrita} alt="instagram" />
                    </div>
                    <input id="nome_cad" className="input" type="text" placeholder="email"></input>
                    <input id="senha_cad" className="input" type="password" placeholder="senha"></input>
                    <input id="senha1_cad" className="input" type="password" placeholder="confirma senha"></input>
                    <Link to="/" id="btn" className="botao" onClick={Cadastrar}>Cadastrar</Link>
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
    );
}
export default Reg;
