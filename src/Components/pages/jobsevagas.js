import React, { useState, useEffect } from 'react';
import { Container, Button, OppButtons, OppAreas, EachThing, BoxItem, ItemImage, DetailsItem, VisitDate } from './jobsevagasstyle'
import { FaPodcast } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import api from '../../config/api';

export default function JobseVagas() {
    const [Vagas, setVagas] = useState()
    const [Jobs, setJobs] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token')
        api.defaults.headers.authorization = `Bearer ${token}`;
        api.get('/fluxos/jobs').then(Response => {
            console.log(Response)
            setJobs(Response.data.jobs)
        }).catch(error => {
            console.log(error)
        });

        api.get('/fluxos/vagas').then(Response => {
            console.log(Response)
            setVagas(Response.data.vagas)
        }).catch(error => {
            console.log(error)
        });

    }, [])


    return (
        <Container>
            <OppButtons>
                <Link to={"/anuciarvaga"}><Button>Anunciar Vaga<FaPodcast size={20} /></Button></Link>
                <Link to={"/anuciarjob"}><Button>Anunciar Job <FaPodcast size={20} /></Button></Link>
            </OppButtons>
            <OppAreas>
                <div>
                    <h1>Vagas</h1>
                </div>
                <EachThing>
                    {(!Vagas) ? <h3 style={{ alignSelf: 'center', border: '3px solid #444', padding: 5, borderRadius: 5, margin: 10, }}>Sem Vagas disponiveis</h3> : Vagas.map(vaga => {
                        return (
                            <BoxItem key={vaga._id}>
                                <ItemImage>
                                    <span><h2>Vaga</h2></span>
                                </ItemImage>
                                <DetailsItem>
                                    <strong>{vaga.vagadetail}</strong>
                                    <i>{vaga.category}</i>
                                    <VisitDate>
                                        <Link to={`/watchvagas/${vaga._id}`}><button>Ver</button></Link>
                                        <i>{vaga.createdAt}</i>
                                    </VisitDate>
                                </DetailsItem>
                            </BoxItem>
                        )
                    })}
                </EachThing>

                <div>
                    <h1>Jobs</h1>
                </div>
                <EachThing>
                    {(!Jobs) ? <h3 style={{ alignSelf: 'center', border: '3px solid #444', padding: 5, borderRadius: 5, margin: 10, }}>Sem Jos disponiveis</h3> : Jobs.map(job => {
                        return (
                            <BoxItem key={job._id}>
                                <ItemImage>
                                    <span><h2>Job</h2></span>
                                </ItemImage>
                                <DetailsItem>
                                    <strong>{job.jobdetail}</strong>
                                    <i>{job.category}</i>
                                    <VisitDate>
                                        <Link to={`/watchjos/${job._id}`}><button>Ver</button></Link>
                                        <i>{job.createdAt}</i>
                                    </VisitDate>
                                </DetailsItem>
                            </BoxItem>
                        )
                    })}
                </EachThing>

            </OppAreas>

        </Container>
    );
}