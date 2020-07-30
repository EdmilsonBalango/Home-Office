import React, { Component } from 'react'
import { Container, DataArea, ContentChild, Button } from './jobsevagasstyle'
import api from '../../config/api';
import { MdDelete } from 'react-icons/md'
import { history } from '../../history';

class ViewerJobs extends Component {
    state = {
        Job: [],
        Id: [],
    }

    async componentDidMount() {
        const token = localStorage.getItem('token')
        api.defaults.headers.authorization = `Bearer ${token}`;
        const id = this.props.match.params.id;
        await api.get(`/fluxos/jobs/${id}`).then(Response => {
            console.log(Response)
            this.setState({
                Job: Response.data.job,
                Id: id,
            })
        }).catch(err => {
            console.log(err)
        })
    }

    async deletejob() {
        const id = this.state.Id
        await api.delete(`/fluxos/jobs/${id}`).then(Response => {
            history.push('/vagasejobs')
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        const author = localStorage.getItem('auth')
        const job = this.state.Job;
        return (
            <Container>
                <DataArea>
                    <h1>{job.jobdetail}</h1>
                    <i>#{job.category}</i>
                    <ContentChild>
                        <div>
                            <p>Edmilson Balango</p>
                            <p>{job.createdAt}</p>
                        </div>
                    </ContentChild>
                    <ContentChild style={{ JustifyContent: 'center', alignItems: 'center' }}>
                        <h3>Requirements</h3>
                        <textarea disabled id={"visualizador"} value={job.requires} />
                    </ContentChild>
                </DataArea>{
                    (author !== job.author ? <Button>Candidatar</Button> : <Button style={{ backgroundColor: '#e95151', color: '#fff', border: '1px solid #ccc' }} onClick={() => { this.deletejob() }}>Delete  <MdDelete size={18} /></Button>)
                }


            </Container>
        );
    }
}

export default ViewerJobs;