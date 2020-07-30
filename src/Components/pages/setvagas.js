import React, { useState } from 'react'

import { Container, Boxform, InputBoxs, SubmitButton } from './vagasejobsstyle'
import api from '../../config/api';

export default function SetJobs() {

    const [fileName, setfileName] = useState(['Sem Ficheiro'])

    const Categories = [
        {
            id: 1,
            name: 'Development'
        },
        {
            id: 2,
            name: 'Music'
        },
        {
            id: 3,
            name: 'Design'
        },
        {
            id: 4,
            name: 'Illsustration'
        },
        {
            id: 5,
            name: 'Photography'
        },


    ];

    async function submit(event) {
        event.preventDefault()
        // const ficheiro = document.getElementById('file').files[0]
        const request = {
            vagadetail: document.getElementById("detailvaga").value,
            category: document.getElementById("category").value,
            requires: document.getElementById("requires").value,
            author: localStorage.getItem('user')
        }

        console.log(request)
        const token = localStorage.getItem('token')
        // const data = new FormData()
        // data.append('picture', ficheiro, ficheiro.name)
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.post(`/fluxos/vagas`, request).then(Response => {
            console.log(Response.data.error)
        }).catch(error => {
            console.log(error)
        })



    }

    function changing() {
        const file = document.getElementById('file')
        setfileName([file.files[0].name])



    }

    return (
        <Container>
            <Boxform onSubmit={submit}>
                <InputBoxs type="text" placeholder={"detalhes da vaga"} id={'detailvaga'}></InputBoxs>
                <select id={'category'}>
                    {Categories.map(cat => {
                        return (
                            <option key={cat.id}>{cat.name}</option>
                        )
                    })}
                </select>
                <textarea id={'requires'}></textarea>
                <strong>Imgem / Flyer</strong>
                <input type={"file"} style={{ display: 'none' }} id={"file"} onChange={() => changing()} />
                <div>
                    <button onClick={(e) => {
                        const file = document.getElementById('file')
                        file.click()
                        e.preventDefault()
                    }}>Ficheiro</button>
                    <span id={'nome'}>{fileName}</span>
                </div>
                <SubmitButton type={"submit"} value={"Postar vaga"} />
            </Boxform>
        </Container>
    );
}