import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './signup';
import Signin from './Signin';
import Home from './Home';
import Menu from '../core/Menu';
import AdminRoutes from '../auth/AdminRoutes';
import PrivateRoutes from '../auth/PrivateRoutes';
import { signout } from '../auth';
import UserDashboard from '../User/UserDashboard';
import AdminDashboard from '../User/AdminDashboard';
import subjectByStandard from '../Admin/SubjectByStandard';
import AddStandards from '../Admin/AddStandards';
import AddSubjects from '../Admin/AddSubjects';
import TopicsBySubject from '../Admin/TopicsBySubject';
import AddTopics from '../Admin/AddTopics';
import VideoView from './VideoView';
import Courses from './Courses';
import Overview from '../components/Overview';
import Contactus from './Contactus';
// import Footer from '../helpers/Footer';

const Routes = () => (
    <BrowserRouter>
        <Menu />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/signin' exact component={Signin} />
            <PrivateRoutes path='/signout' exact component={signout} />
            <PrivateRoutes path='/user/dashboard' exact component={UserDashboard} />
            <AdminRoutes path='/admin/dashboard' exact component={AdminDashboard} />
            <Route path='/subject/:standardId' exact component={subjectByStandard} />
            <Route path='/topic/:subjectId' exact component={TopicsBySubject} />
            <Route path="/standard/create" exact component={AddStandards} />
            <Route path="/subject2/create/:standardId" exact component={AddSubjects} />
            <Route path="/topic/create/:subjectId" exact component={AddTopics} />
            <Route path="/show/video" exact component={VideoView} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/overview" exact component={Overview} />
            <Route path="/contactus" exact component={Contactus} />
        </Switch>
        {/* <Footer /> */}
    </BrowserRouter>
);

export default Routes;