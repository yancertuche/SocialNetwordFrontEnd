import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Menu from './components/Menu';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ProfileUser from './pages/ProfileUser';
import ProfileCourse from './pages/ProfileCourse';
import Friends from './pages/Friends';
import Principal from './pages/Principal';
import Chat from './pages/Chat';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu/>
      <IonRouterOutlet id="main">
        <Route path="/home" component={Home} exact={true} />
        <Route path="/feed" component={Feed} exact={true} />
        <Route path="/user" component={ProfileUser} exact={true} />
        <Route path="/course" component={ProfileCourse} exact={true} />
        <Route path="/people" component={Friends} exact={true} />
        <Route path="/principal" component={Principal} exact={true} />
        <Route path="/chat" component={Chat} exact={true} />
        <Route path="/friends" component={Friends} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
