import React, {useState} from 'react';
import axios from "axios";
import './style.css';

export default function Feed() {

    const [busca, setBusca] = useState(''),
          [msgLogon] = useState(localStorage.getItem("login"));

    function Buscar(){
        var ul = document.querySelector('ul');

        axios.get('https://api.openbrewerydb.org/breweries?by_name=' + busca)
            .then(function(res){
                console.log(res);
                var docs = res.data;
                ul.innerHTML = ""; 
                for(var i = 0; i < docs.length && i<10; i++){
                    var li = document.createElement('li');
                    li.innerHTML = "Nome do Estabelecimento: " +docs[i].name+"<br>Endereço: "
                                    +docs[i].street+", "+docs[i].city+"<br>Site: <a href=" 
                                    + docs[i].website_url +">" +  docs[i].website_url + "</a><br><br>";
                    ul.appendChild(li);
                }
    
            });
    }

    function LogOut(){
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
                </ul>
            </div>
        </div>
    );
}
