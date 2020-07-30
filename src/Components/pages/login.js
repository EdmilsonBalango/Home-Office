import React, { Component } from 'react'
import { Container, Boxlogin, Fields } from './loginstyle/styles'
import api from '../../config/api'
import { history } from '../../history'




class Login extends Component {

    state = {

    }


    async handleSubmit(event) {

        event.preventDefault()

        let request = {
            email: document.getElementsByClassName("caixas")[0].value,
            password: document.getElementsByClassName("caixas")[1].value
        }

        await api.post('/auth/authenticate', request).then(Response => {
            // console.log(Response.data)
            const token = Response.data.token;
            const userId = Response.data.user._id
            const tumblr = Response.data.user.images
            const auth = Response.data.user.name
            const profileimpath = Response.data.user.profile
            if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('user', userId)
                localStorage.setItem('tumblr', tumblr)
                localStorage.setItem('profile', profileimpath)
                localStorage.setItem('auth', auth)
                api.defaults.headers.authorization = `Bearer ${token}`;
                history.push("/myoffice")
            }

        }).catch((err) => {
            console.log(err);
        });
    }





    render() {
        return (
            <Container>
                {/* {console.log(Messagens)} */}
                <Boxlogin onSubmit={this.handleSubmit}>
                    <strong>Faça o seu Login</strong>
                    <Fields>
                        <input className={"caixas"} type={"email"} placeholder={"Email"} />
                        <input className={"caixas"} type={"password"} placeholder={"password"} />
                        <input id={"buttons"} type={"submit"} value={"Sign in"} />
                        <div><a href={"/signup"}>Não tenho uma conta</a><a href={"/login"}>Esqueci meus dados</a></div>
                    </Fields>
                    <i>powered by spotlight</i>
                </Boxlogin>

                {/* {Messagens && <span className={"Erro"}>{Messagens}</span>} */}

            </Container>
        );
    }
}

export default Login;