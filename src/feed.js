import React from 'react';
import $ from "jquery";
import axios from "axios";

function Buscar(){
    var busca = document.getElementById("busca"),
        ul = document.querySelector('ul');
    axios.get('https://api.openbrewerydb.org/breweries')
        .then(function(res){
            console.log(res);
            var docs = res.data;
            for(var i = 0; i < docs.length && i<10; i++){
                var li = document.createElement('li');
                li.innerHTML = docs[i].name;
                ul.appendChild(li);
            }
        });
}

function Feed() {

    return (
        <div>
            <h1>Cervejarias</h1>
            <input type="text" id="busca" value=""></input>
            <button onClick={Buscar}>Buscar</button>
            <ul>
            </ul>
        </div>
    );
}

export default Feed;