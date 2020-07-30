import React, { Component } from 'react'
import { Container, DataArea, ContentChild, Button } from './jobsevagasstyle'
import api from '../../config/api';
import { MdDelete } from 'react-icons/md'
import { history } from '../../history';

class ViewerVagas extends Component {
    state = {
        Vaga: [],
        Id: []
    }

    async componentDidMount() {
        const token = localStorage.getItem('token')
        api.defaults.headers.authorization = `Bearer ${token}`;
        const id = this.props.match.params.id;

        await api.get(`/fluxos/vagas/${id}`).then(Response => {
            console.log(Response)
            this.setState({
                Vaga: Response.data.vaga,
                Id: id,
            })
        }).catch(err => {
            console.log(err)
        })
    }

    async deletedvaga() {
        const id = this.state.Id
        await api.delete(`/fluxos/vagas/${id}`).then(Response => {
            history.push('/vagasejobs')
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        const vaga = this.state.Vaga;
        return (
            <Container>
                <DataArea>
                    <h1>{vaga.vagadetail}</h1>
                    <i>#{vaga.category}</i>
                    <ContentChild>
                        <div>
                            <p>Edmilson Balango</p>
                            <p>{vaga.createdAt}</p>
                        </div>
                    </ContentChild>
                    <ContentChild style={{ JustifyContent: 'center', alignItems: 'center' }}>
                        <h3>Requirements</h3>
                        <textarea disabled id={"visualizador"} value={vaga.requires} />

                    </ContentChild>
                </DataArea>
                <Button>Candidatar</Button>
                <Button style={{ backgroundColor: '#e95151', color: '#fff', border: '1px solid #ccc' }} onClick={() => { this.deletedvaga() }}>Delete  <MdDelete size={18} /></Button>

            </Container>
        );
    }
}

export default ViewerVagas;