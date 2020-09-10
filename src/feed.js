import React from 'react';
import axios from "axios";
import './style.css';

function Buscar(){
    var busca = document.getElementById("busca"),
        ul = document.querySelector('ul');
    axios.get('https://api.openbrewerydb.org/breweries?by_name=' + busca.value)
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

function Feed() {

    return (
        <div className="feed">
            <h1>Cervejarias</h1>
            
            <input type="text" id="busca"></input>
            <button onClick={Buscar}>Buscar</button>
            <div className="wrap">
                <ul>
                </ul>
            </div>
        </div>
    );
}

export default Feed;