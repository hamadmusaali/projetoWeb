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
        const token = localStorage.getItem("token");
        $.ajax({
            headers: {
                Authorization: `Bearer ${token}`
            },
            url: "http://localhost:4000/projects",
            type: "POST",
            data: auxPost,
            success: function (response) {
                //console.log(response);
            }
        });
    }

    function Buscar() {
        const token = localStorage.getItem("token");
        const b = {"text": busca};
        setCervejas([]);
        axios.get('http://localhost:4000/projects', {headers: {Authorization: `Bearer ${token}`}})
            .then(function (res) {
                //console.log(res.data);
                setCervejas(res.data.busca);
            });
        console.log(cervejas);
    }

    function LogOut() {
        localStorage.setItem("acesso", false);
        localStorage.setItem("token", "");
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
                        <li key={cerveja._id}>
                            <p>Post: {cerveja.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
