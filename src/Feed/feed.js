import React, { useState } from 'react';
import axios from "axios";
import './style.css';

export default function Feed() {

    const [busca, setBusca] = useState(''),
        [msgLogon] = useState(localStorage.getItem("login")),
        [cervejas, setCervejas] = useState([]);

    function Buscar() {

        axios.get('https://api.openbrewerydb.org/breweries?by_name=' + busca)
            .then(function (res) {
                setCervejas([]);
                setCervejas(res.data);
            });
    }

    function LogOut() {
        localStorage.setItem("acesso", false);
        localStorage.setItem("login", "");
        window.location.href = "/";
    }

    return (
        <div className="feed">
            <h1>Cervejarias</h1>
            <input value={busca} onChange={(ev) => setBusca(ev.target.value)} type="text" id="busca"></input>
            <button onClick={Buscar} className="button1">Buscar</button>
            <span className="logon">{msgLogon}</span>
            <button onClick={LogOut} className="button2">Sair</button>
            <div className="wrap">
                <ul>
                    {cervejas.map(cerveja => (
                        <li key={cerveja.id}>
                            <p>Nome do Estabelecimento: {cerveja.name}</p>
                            <p>Endereço: {cerveja.street}</p>
                            <p>Cidade: {cerveja.city}</p>
                            <p>Site: <a href={cerveja.website_url}>{cerveja.website_url}</a></p>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
}
