import React from 'react';
import $ from 'jquery';

function Cadastrar() {

    var login1 = document.getElementById('login');
    var senha1 = document.getElementById('senha');

    $.ajax({
        url: "https://reqres.in/api/register",
        type: "POST",
        data: {
            email: login1.value,
            password: senha1.value
        },
        success: function (response) {
            console.log(response);
        }
    });
}

function Login() {

    var login2 = document.getElementById('login');
    var senha2 = document.getElementById('senha');

    $.ajax({
        url: "https://reqres.in/api/login",
        type: "POST",
        data: {
            email: login2.value,
            password: senha2.value
        },
        success: function (response) {
            console.log(response);
        }
    });
}

function LoginCadastro() {

    return (
        <div>
            <div>
                <h1>Cadastro</h1>
                <p>
                <input type="text" id="login" />
                </p>
                <p>
                <input type="text" id="senha" />
                </p>
                <button onClick={Cadastrar}>Cadastrar</button>
            </div>
            <div>
                <h1>Login</h1>
                <p>
                <input type="text" id="login" />
                </p>
                <p>
                <input type="text" id="senha" />
                </p>
                <button onClick={Login}>Login</button>
            </div>
        </div>
    );
}

export default LoginCadastro;