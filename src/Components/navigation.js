import React, { useState, useEffect } from 'react'
import { Container, UnordenadeList, LogoIcon } from '../Styles/navigationstyle'
import { Link } from 'react-router-dom'
import api from '../config/api'








//nova aba de Jobs & Vagas é onde as pessoas vão deixar anúncios de vagas e posteriormente as pessoas que tiverem
//interesse poderão submeter os seus perfís para uma análise e por fim será solicitado caso necessário.
//Estás opçoes são apenas para usuários cadastrados  


export default function Navigation() {
    const [UserName, setUserName] = useState()

    const user = localStorage.getItem('user');

    api.get(`/auth/${user}`).then(Response => {
        const NomeUser = Response.data.user.nickname
        setUserName(NomeUser)
    })

    const [navLinks, setnavLinks] = useState([
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'People',
            path: '/people',
        },
        {
            title: 'About Us',
            path: '/about',
        },
        {
            title: 'Login',
            path: '/login'
        },

    ])
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setnavLinks([
                {
                    title: 'Home',
                    path: '/',
                },
                {
                    title: 'People',
                    path: '/people',
                },
                {
                    title: 'Jobs & Vagas',
                    path: '/vagasejobs',
                },
                {
                    title: UserName,
                    path: '/myoffice'
                },
            ])
        }
    }, [UserName])

    return (
        <Container>
            <LogoIcon>Home Office</LogoIcon>
            <UnordenadeList>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </UnordenadeList>
        </Container>
    )
}