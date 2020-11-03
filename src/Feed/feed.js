import React, { useState } from 'react';
import $ from "jquery";
import axios from "axios";
import { useForm } from 'react-hook-form'
import './style.css';

export default function Feed() {

    const [busca, setBusca] = useState(''),
        [msgLogon] = useState(localStorage.getItem("login")),
        [conteudo, setConteudo] = useState([]),
        [imgs, setImgs] = useState([]),
        [texto, setTexto] = useState('');

    const { register, handleSubmit } = useForm();

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
                console.log(response);
            }
        });
    }

    function Buscar() {
        
        const token = localStorage.getItem("token");
        var aux = busca;
        setConteudo([]);
        if (aux === '') 
            aux = "*";

        axios.get('http://localhost:4000/projects/' + aux, {headers: {Authorization: `Bearer ${token}`}})
            .then(function (res) {
                setConteudo(res.data.busca);
            });
        console.log(conteudo);
    }

    const Upload = async (data) => {
        if(localStorage.getItem("logon") === "admin@admin.com"){
            const formData = new FormData();
            formData.append("imagem", data.imagem[0]);

            const token = localStorage.getItem("token");
            
            const res = await fetch("http://localhost:4000/projects/imagens", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: "POST",
                body: formData
            }).then(res => res.json())
            console.log(JSON.stringify(res))
            console.log(res);
            if(res.status)
                setImgs("http://localhost:4000/imagens/"+res.message);
        }else{
            alert("Você não tem permissão")
        }
    }

    function LogOut() {
        localStorage.setItem("acesso", false);
        localStorage.setItem("token", "");
        localStorage.setItem("login", "");
        localStorage.setItem("logon", "");
        window.location.href = "/";
    }

    return (
        <div className="feed">
            <h1>Feed</h1>
            <input value={texto} className="input" type="text" onChange={(ev) => setTexto(ev.target.value)} placeholder="Insira o texto" required></input>
            <button id="btn" className="botao" onClick={Postar}>Postar</button>
            <input value={busca} onChange={(ev) => setBusca(ev.target.value)} type="text" id="busca"></input>
            <button onClick={Buscar} className="button1">Buscar</button>
            <form onSubmit={handleSubmit(Upload)}>
                <input  ref={register} type="file" name="imagem" />
                <button>Upload</button>
            </form>
            <span className="logon">{msgLogon}</span>
            <button onClick={LogOut} className="button2">Sair</button>
            <div className="wrap">
                <ul>
                    {conteudo.map(post => (
                        <li key={post._id}>
                            <p>Post: {post.text}</p>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li>
                        <img src={imgs}/>
                    </li>                    
                </ul>
            </div>
        </div>
    );
}