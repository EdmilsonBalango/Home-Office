import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/home'
import People from './pages/people'
import About from './pages/about'
import Login from './pages/login'
import SignUp from './pages/signup'
import UserVisit from './pages/uservisit'
import MyOffice from './pages/mypage'
import { PrivateRoute } from './privateRoutes'
import JobseVagas from './pages/jobsevagas'
import SetJobs from './pages/setjobs'
import SetVagas from './pages/setvagas'
import UpdateData from './pages/updatedata'
import ViewerJobs from './pages/viewerjobs'
import ViewerVagas from './pages/watchvagas'


export default function Routes() {
    return (

        <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/people" component={People} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/uservisit/:id" component={UserVisit} />
            <PrivateRoute path="/myoffice" component={MyOffice} />
            <PrivateRoute path="/vagasejobs" component={JobseVagas} />
            <PrivateRoute path="/anuciarjob" component={SetJobs} />
            <PrivateRoute path="/anuciarvaga" component={SetVagas} />
            <PrivateRoute path="/updatedata" component={UpdateData} />
            <PrivateRoute path="/watchjos/:id" component={ViewerJobs} />
            <PrivateRoute path="/watchvagas/:id" component={ViewerVagas} />
        </Switch>
    )
}