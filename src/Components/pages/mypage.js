import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Tumblr, PictureUser, NameUser, UserRestArea, GroupDetail, Stars, PageDetails, Button, JobFace, ImgCompany, WorksAndProjects, Fotos, Foto, TumblrUpdateButton } from './mypagestyle'
import { FaEye, FaNetworkWired, FaStar, FaDollarSign, FaEdit, FaCamera, FaDoorOpen, FaPlus } from 'react-icons/fa'
import { MdDone } from 'react-icons/md'
import api from '../../config/api'

class MyOffice extends Component {
    state = {
        UserData: [],
        Tumblr: [],
        Profile: [],
        Jobs: [],
        Vagas: [],
        Ficheiro: [],
        tempFile: []

    }


    handlefile() {
        const filer = document.getElementById('filer');
        filer.click()

    }

    bringButton(e) {
        const botao = document.getElementById('confirm');
        botao.style.display = "block"

        const foto = e.target.files[0]
        // this.setState({ tempFile: 'ola' })
        console.log(foto)
    }

    async sendfile(event) {
        // event.preventDefault()
        const ficheiro = document.getElementById('filer').files[0];
        const userid = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        if (ficheiro.size > 5 * 1024 * 1024)
            return console.log('ficheiro demasiado largo')

        const data = new FormData()
        data.append('picture', ficheiro)
        api.defaults.headers.authorization = `Bearer ${token}`;
        api.put(`/auth/:${userid}`, data).then(Response => {
            console.log(Response)
        }).catch(err => {
            console.log(err)
        })

    }

    handlegaleryfile() {
        const filer = document.getElementById('filegalery');
        filer.click()

    }

    async componentDidMount() {

        await api.get(`/auth/${localStorage.getItem('user')}`).then(Response => {
            const tumblr = Response.data.user.images
            const perfil = Response.data.user.profile
            localStorage.setItem('tumblr', tumblr);
            localStorage.setItem('profile', perfil)
            this.setState({ UserData: Response.data.user })

        }).catch(err => {
            console.log(err)
        })

    }

    render() {
        const User = this.state.UserData

        return (
            <Container>
                <Tumblr url={require(`../../../../home-office-backend/src/tmp/uploads/${localStorage.getItem("tumblr")}`)} >
                    <PictureUser url={require(`../../../../home-office-backend/src/tmp/uploads/${localStorage.getItem("profile")}`)} >
                        <span onClick={this.handlefile}>
                            <FaCamera size={20} />
                        </span>
                    </PictureUser>
                    <span style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', height: 80, alignItems: 'center' }}>
                        <TumblrUpdateButton onClick={this.handlefile}>
                            <FaCamera />
                            <input type={"file"} style={{ display: 'none' }} id={"filer"} onChange={this.sendfile}></input>
                        </TumblrUpdateButton>
                        <button id={"confirm"} onClick={() => this.sendfile()} style={{ background: '#fff', width: 100, border: '1px solid #ddd', padding: 10, borderRadius: 3, outline: 'none', cursor: 'pointer', display: 'none' }}>Confirmar</button>
                    </span>
                </Tumblr>
                <div>
                    <NameUser>{User.name}</NameUser>
                    <strong>#{!User.category ? 'set your category' : User.category}</strong>
                </div>
                <UserRestArea>
                    <i>{!User.description ? 'set your description' : User.description}</i>
                    <GroupDetail>
                        <PageDetails>
                            <span ><FaEye />  <i>125 viz a pagina</i></span>
                            <span><FaNetworkWired /><i>5 trabalhos feitos</i></span>
                            <span><FaDollarSign /><i>preço inicial 1500</i></span>
                        </PageDetails>
                        <Stars>
                            <strong>You Were rated to</strong>
                            <span>{[...Array(5)].map((index) => <FaStar key={Math.random()} size={30} />)}</span>
                        </Stars>
                    </GroupDetail>
                </UserRestArea>
                <Link to={"/updatedata"}><Button>Editar perfil  <FaEdit size={18} /></Button></Link>
                <a href={"/home"}><Button onClick={() => { localStorage.clear() }} style={{ backgroundColor: '#e95151', color: '#fff', border: '1px solid #ccc' }}>Log out  <FaDoorOpen size={18} /></Button></a>
                <UserRestArea>
                    <h1>Jobs</h1>
                    <JobFace>
                        <span>
                            <ImgCompany />
                            <p>Guy - name</p>

                        </span>
                        <span>
                            <button>Ver</button>
                            <MdDone size={24} />
                        </span>
                    </JobFace>
                    <h1>Vagas</h1>
                    <JobFace>
                        <span>
                            <ImgCompany />
                            <p>Company</p>
                        </span>
                        <span>
                            <button>Cancelar</button>
                        </span>
                    </JobFace>
                </UserRestArea>
                <WorksAndProjects>
                    <h2>Galeria</h2>
                    <Fotos >
                        {[...Array(3)].map(() => {
                            return (

                                <Foto key={Math.random()}>
                                    <strong>imagem.name</strong>
                                </Foto>
                            )
                        })}
                        <Foto style={{ border: '2px dashed #ddd', justifyContent: 'center', alignItems: 'center' }} onClick={this.handlegaleryfile}>
                            <FaPlus size={50} />
                            <input type={'file'} id={'filegalery'} style={{ display: 'none' }} />
                        </Foto>
                    </Fotos>

                </WorksAndProjects>
            </Container>
        );
    }
}

export default MyOffice;