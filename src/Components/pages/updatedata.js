import React, { useState, useEffect } from 'react'
import { Container, GroupDetail } from './mypagestyle'
import api from '../../config/api'


export default function UpdateData() {
    const [Ficheiro, setFicheiro] = useState([])


    function handlefile(e) {
        const fileData = e.target.files[0]
        setFicheiro([fileData])
    }
    async function sendfile(e) {

        e.preventDefault()
        const ficheiro = Ficheiro[0]
        const userid = localStorage.getItem('user')

        if (ficheiro.size > 5 * 1024 * 1024)
            return console.log('ficheiro demasiado largo')


        const token = localStorage.getItem('token')

        const data = new FormData()

        data.append('picture', ficheiro, ficheiro.name)
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.put(`auth/:${userid}`, data).then(Response => {
            console.log(Response)
        }).catch(err => {
            console.log(err)
        })

    }




    useEffect(() => {
        console.log(Ficheiro[0])
    }, [Ficheiro])


    return (
        <Container>
            <GroupDetail>
                <input type="file" onChange={handlefile} />
                <button onClick={sendfile}>Tumblr</button>
                {/* <button onClick={ChangePerfil}>Perfil</button> */}
            </GroupDetail>
        </Container>
    )
}