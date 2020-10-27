import React, { useState } from 'react';
import $ from "jquery";
import axios from "axios";
import './style.css';

export default function Feed() {

    const [busca, setBusca] = useState(''),
        [msgLogon] = useState(localStorage.getItem("login")),
        [cervejas, setCervejas] = useState([]),
        [texto, setTexto] = useState('');

    function Postar() {

        var auxPost = {
            text: texto
        }
        setTexto('');
        console.log(texto);
        $.ajax({
            url: "http://localhost:4000/projects",
            type: "POST",
            data: auxPost,
            success: function (response) {
                console.log(response);
            }
        });
    }

    function Buscar() {
        console.log(cervejas);
        axios.get('http://localhost:4000/projects' + busca)
            .then(function (res) {
                setCervejas([]);
                setCervejas(res.data);
                console.log(cervejas);
            });
        
    }

    function LogOut() {
        localStorage.setItem("acesso", false);
        localStorage.setItem("login", "");
        window.location.href = "/";
    }

    return (
        <div className="feed">
            <h1>Feed</h1>
            <input value={texto} className="input" type="text" onChange={(ev) => setTexto(ev.target.value)} placeholder="Insira o texto" required></input>
            <button id="btn" className="botao" onClick={Postar}>Postar</button>
            <input value={busca} onChange={(ev) => setBusca(ev.target.value)} type="text" id="busca"></input>
            <button onClick={Buscar} className="button1">Buscar</button>
            <span className="logon">{msgLogon}</span>
            <button onClick={LogOut} className="button2">Sair</button>
            <div className="wrap">
                <ul>
                    {cervejas.map(cerveja => (
                        <li key={cerveja.id}>
                            <p>Nome do Estabelecimento: {cerveja.text}</p>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
}
