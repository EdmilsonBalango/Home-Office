import React, { Component } from 'react'
import { Container, Tumblr, PictureUser, NameUser, UserRestArea, GroupDetail, Stars, PageDetails, WorksAndProjects, Fotos, SociaNetworks, Foto } from './uservisitstyle'
import { FaEye, FaNetworkWired, FaStar, FaFacebook, FaLinkedin, FaGithub, FaDollarSign } from 'react-icons/fa'
import api from '../../config/api';

class UserVisit extends Component {
    state = {
        Details: [],
        Imagens: [],
        Tumblr: [],
        Profile: [],

    }


    async componentDidMount() {

        const id = this.props.match.params.id;

        await api.get(`/auth/${id}`).then(Response => {

            this.setState({ Details: Response.data.user })
            sessionStorage.setItem('capa', Response.data.user.images)
            sessionStorage.setItem('perfil', Response.data.user.profile)

        }).catch(err => {
            console.log(err)
        });

        this.setState({ Tumblr: sessionStorage.getItem('capa') })

        const token = localStorage.getItem('token')
        if (token) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            await api.get(`images/`).then(Response => {
                this.setState({ Imagens: Response.data.pics })
                // console.log(Response.data.pics)
            }).catch(err => {
                console.log(err)
            })

        }





    }
    render() {
        const Details = this.state.Details;
        const Imagens = this.state.Imagens;
        // const Tumblr = this.state.Tumblr;
        return (
            <Container>
                {/* src={require(`../../../../home-office-backend/src/tmp/uploads/${image}`)} */}
                <Tumblr src={require(`../../../../home-office-backend/src/tmp/uploads/${sessionStorage.getItem('capa')}`)}>
                    <PictureUser src={require(`../../../../home-office-backend/src/tmp/uploads/${sessionStorage.getItem('perfil')}`)} />
                </Tumblr>
                <div>
                    <NameUser>{Details.name}</NameUser>
                    <strong>#{!Details.category ? 'description not defined' : Details.category}</strong>
                </div>
                <UserRestArea>
                    <i>{!Details.description ? 'description not defined' : Details.description}</i>
                    <GroupDetail>
                        <PageDetails>
                            <span ><FaEye />  <i>125 viz a pagina</i></span>
                            <span><FaNetworkWired /><i>5 trabalhos feitos</i></span>
                            <span><FaDollarSign /><i>preço inicial 1500</i></span>
                        </PageDetails>
                        <Stars>
                            <strong>Rate</strong>
                            <span>{[...Array(5)].map((index) => <FaStar key={Math.random()} size={30} />)}</span>
                        </Stars>
                    </GroupDetail>
                </UserRestArea>
                <WorksAndProjects>
                    <h2>Galeria</h2>
                    <Fotos>
                        {Imagens.map(imagem => {
                            return (
                                <Foto url={require(`../../../../home-office-backend/src/tmp/uploads/${imagem.key}`)} key={imagem._id}>
                                    <strong>{imagem.name}</strong>
                                </Foto>

                            )
                        })}
                    </Fotos>
                </WorksAndProjects>
                <SociaNetworks>
                    <span><FaFacebook size={30} />facebook.com/edmilson_balango</span>
                    <span><FaLinkedin size={30} />linkedin.com/Edmilson_Balango</span>
                    <span><FaGithub size={30} />github.co/edd</span>
                </SociaNetworks>
            </Container >
        );
    }
}

export default UserVisit;