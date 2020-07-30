import React, { Component } from 'react'
import { Container, UsersContainer, PeopleBox, Area, Profile, Details, Selected } from '../pages/peoplestyle/styles'
import { Link } from 'react-router-dom'

import api from '../../config/api';

class People extends Component {
    state = {
        PeopleLoaded: [],
    }

    componentDidMount() {
        this.loadpeople();


    }

    loadpeople = async () => {
        await api.get('/auth').then(Response => {
            this.setState({ PeopleLoaded: Response.data.users })
        })
    }
    render() {
        return (
            <Container>
                <UsersContainer>
                    <h1>People</h1>
                    <Area>
                        {this.state.PeopleLoaded.map((people) => {
                            return (
                                <PeopleBox key={people._id}>
                                    <Profile>
                                        {/* url={require(`../../../../home-office-backend/src/tmp/uploads/${localStorage.getItem("tumblr")}`)} */}
                                        <img src={`${require(`../../../../home-office-backend/src/tmp/uploads/${people.profile}`)}`} alt={"imagem"} />
                                    </Profile>
                                    <Details>
                                        <span>
                                            <strong>{people.name}</strong>
                                            <p>{!people.category ? 'category to be set' : people.category}</p>
                                        </span>
                                        <Selected>
                                            <Link to={'/uservisit/' + people._id}><button>Visitar</button></Link>
                                            <strong>${!people.price ? 'not defined' : people.price}</strong>
                                        </Selected>
                                    </Details>
                                </PeopleBox>
                            )
                        })}

                    </Area>
                </UsersContainer>

            </Container>
        );
    }
}

export default People;
