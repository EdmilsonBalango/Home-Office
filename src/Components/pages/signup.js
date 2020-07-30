import React from 'react'
import { Container, FormSignUp, FieldsSignup } from './signupstyle'
import api from '../../config/api';

export default function SignUp() {

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

    function handleSubmit(event) {
        event.preventDefault()

        const request = {
            name: document.getElementsByClassName("caixa")[0].value,
            nickname: document.getElementsByClassName("caixa")[1].value,
            email: document.getElementsByClassName("caixa")[2].value,
            password: document.getElementsByClassName("caixa")[3].value,
            description: document.getElementsByClassName("caixa")[5].value,
            category: document.getElementsByClassName("caixa")[6].value,
            price: document.getElementsByClassName("caixa")[7].value,
            images: 'diversao.png',
            profile: 'avatar.JPG'
        }

        // console.log(request)

        api.post('/auth/register', request).then(Response => {

            console.log(Response.value)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <Container>
            <FormSignUp onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <FieldsSignup>
                    <input className={"caixa"} type={"text"} name={"name"} placeholder={"Digite seu nome completo"} />
                    <input className={"caixa"} type={"text"} name={"nickname"} placeholder={"Digite o nome que deseja usar como perfil"} />
                    <input className={"caixa"} type={"email"} name={"email"} placeholder={"Digite o seu email"} />
                    <input className={"caixa"} type={"password"} placeholder={"Digite o seu password"} />
                    <input className={"caixa"} type={"password"} name={"password"} placeholder={"Digite novamente o seu password"} />
                    <h2>Teu perfil</h2>
                    <input className={"caixa"} name={"description"} placeholder={"Pequena descrição do teu perfil"} />
                    <select className={"caixa"} name={"category"} >
                        {Categories.map(category => (
                            <option key={category.id}>{category.name}</option>
                        )
                        )}
                    </select>
                    <input className={"caixa"} name={"price"} placeholder={"Coloque o seu preço inicial"} />
                    <input className={"Enviar"} type={"submit"} />
                </FieldsSignup>
            </FormSignUp>
        </Container>
    )
}